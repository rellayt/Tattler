import uuid
from flask_socketio import emit
from flask import request
from pony.orm import db_session, desc, select, delete
from src.entities.Room import Room, RoomType
from src.entities.RoomMessage import RoomMessage
from src.entities.RoomParticipant import RoomParticipant
from src.entities.User import User
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.middlewares.messages import room_message_fields_validation

room_typing_users = []


def room(socketio):
	@socketio.on_error('/room')
	def error_handler(e):
		emit('TOKEN_EXPIRED')

	@socketio.on('JOIN_ROOM', namespace='/room')
	@jwt_decode_user
	@db_session
	def join(data):
		try:
			room_id = data['roomId']
			print(request.user['name'], ' joined room ', room_id)
			check_not_displayed({'roomId': room_id})
			emit_room_participants(room_id)
			emit_room_messages(room_id)
		except Exception as e:
			print(e)

	@socketio.on('JOIN', namespace='/room')
	@jwt_decode_user
	@db_session
	def join():
		try:
			user_id = request.user['id']
			emit_user_overview(user_id)
		except Exception as e:
			print(e)

	def emit_room_participants(room_id):
		try:
			user_id = request.user['id']
			participants = RoomParticipant.select(lambda p: p.room.id == room_id and p.user.id != uuid.UUID(user_id))
			updated_users = select(u for u in User for p in participants if u.id == p.user.id)
			emit(f'ROOM_USERS_{room_id}',
				  {'users': [{'name': u.name, 'id': str(u.id), 'avatar': u.avatar} for u in updated_users]})
		except Exception as e:
			print(e)

	@socketio.on('CHECK_NOT_DISPLAYED', namespace='/room')
	@jwt_decode_user
	@db_session
	def check_not_displayed(data):
		try:
			room_id = data['roomId']
			user_id = request.user['id']
			last_room_message = RoomMessage.select(lambda p: p.roomId == room_id).order_by(
				lambda p: desc(p.created_at)).first()
			if last_room_message is None:
				return

			if last_room_message.user.id != uuid.UUID(user_id):
				if not last_room_message.displayed:
					last_room_message.displayed = True
					emit_room_messages(room_id)

			emit_overview_to_participants(room_id)
		except Exception as e:
			print(e)

	def emit_room_messages(room_id):
		try:
			room_messages = RoomMessage.select(roomId=room_id).order_by(lambda p: desc(p.created_at))
			messages = [msg.json() for msg in room_messages]
			participants = RoomParticipant.select(lambda p: p.room.id == room_id)
			updated_users = select(u for u in User for p in participants if u.id == p.user.id)
			avatars = [{'id': str(u.id), 'avatar': u.avatar} for u in updated_users]
			emit(f'ROOM_MESSAGES_{room_id}', {'messages': messages, 'avatars': avatars}, broadcast=True)
		except Exception as e:
			print(e)

	@socketio.on('ADD_MESSAGE', namespace='/room')
	@room_message_fields_validation
	@jwt_decode_user
	@db_session
	def add_message(data):
		try:
			[message, room_id] = destructure(data, 'message', 'roomId')
			user_id = request.user['id']
			RoomMessage(message=message, roomId=room_id, displayed=False, user=user_id)
			emit_room_messages(room_id)
			emit_overview_to_participants(room_id)
		except Exception as e:
			print(e)

	def emit_user_overview(user_id):
		try:
			user_rooms = select(
				r for r in Room for p in RoomParticipant if r.id == p.room.id and p.user.id == uuid.UUID(user_id))
			overview_messages = []
			for room in user_rooms:
				last_room_message = select(m for m in RoomMessage if room.id == m.roomId) \
					.order_by(lambda m: desc(m.created_at)).first()

				if not bool(last_room_message):
					continue

				room_participants = select(
					p for p in RoomParticipant
					if str(p.room.id) == room.id and str(p.user.id) != user_id)

				overview_message = last_room_message.overview_json()
				overview_message['isYourMessage'] = user_id == str(last_room_message.user.id)

				if room.type == RoomType.MULTI:
					overview_message['avatar'] = 'group'
					overview_message['userId'] = None
				else:
					participant = room_participants.first()
					participant_updated = User.get(id=participant.user.id)
					overview_message['avatar'] = participant_updated.avatar
					overview_message['userId'] = str(participant_updated.id)

				overview_message['names'] = [p.user.name for p in room_participants]
				overview_messages.append(overview_message)
			overview_messages.sort(key=lambda item: item['created_at'], reverse=True)
			emit(f'ROOM_OVERVIEW_{user_id}', {'overviewMessages': overview_messages}, broadcast=True)
		except Exception as e:
			print(e)

	def emit_overview_to_participants(room_id):
		room_participants = select(
			p.user.id for p in RoomParticipant if str(p.room.id) == room_id)
		for id in room_participants:
			emit_user_overview(str(id))

	@socketio.on('START_TYPING', namespace='/room')
	@jwt_decode_user
	@db_session
	def start_typing(data):
		try:
			[user_id, room_id] = destructure(data, 'userId', 'roomId')
			exists = False
			for i, room in enumerate(room_typing_users):
				if room_id in room:
					exists = True
					break

			if not exists:
				room_typing_users.append({room_id: user_id})
			emit(f'TYPING_ROOM_{room_id}', {'id': user_id}, broadcast=True)
		except Exception as e:
			print(e)

	@socketio.on('END_TYPING', namespace='/room')
	@jwt_decode_user
	@db_session
	def end_typing(data):
		try:
			[room_id] = destructure(data, 'roomId')
			for i, room in enumerate(room_typing_users):
				if room_id in room:
					room_typing_users.remove(room)
			emit(f'TYPING_ROOM_{room_id}', {'id': None}, broadcast=True)
		except Exception as e:
			print(e)

	@socketio.on('CHECK_EMPTY_ROOMS', namespace='/room')
	@jwt_decode_user
	@db_session
	def check_empty_rooms():
		try:
			user_id = request.user['id']
			user_rooms = select(
				r.id for r in Room if str(r.room_participant.user.id) == user_id)

			for id in user_rooms:
				room_messages = select(m for m in RoomMessage if id == m.roomId and bool(m)).first()
				if not bool(room_messages):
					delete(p for p in RoomParticipant if p.room.id == id)
					delete(r for r in Room if r.id == id)
					print('DESTROYED: ', id)
					emit(f'ROOM_DESTROY_{user_id}', {'isDestroyed': True}, namespace='', broadcast=True)
					break
		except Exception as e:
			print(e)
