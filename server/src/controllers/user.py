import uuid
from flask import request
from flask_restful import Resource
from pony.orm import select, raw_sql, desc
from src.entities.ChannelMessage import ChannelMessage
from src.entities.Room import Room
from src.entities.RoomMessage import RoomMessage
from src.entities.RoomParticipant import RoomParticipant
from src.entities.User import User
from src.middlewares.jwt import jwt_decode_user


class UserController(Resource):
	@jwt_decode_user
	def get(self):
		try:
			id = request.args.get('id')
			if id is None:
				return {'user': request.user}, 200
			user = User.get(id=id).json()

			info = request.args.get('info')
			last_messages = request.args.get('last_messages')
			common_room = request.args.get('common_room')
			total_messages = request.args.get('total_messages')

			if bool(info):
				user['info'] = get_user_information(id)
				user['info'].update({'register': user['created_at']})

			if bool(common_room):
				user['roomId'] = get_common_room(id)

			if bool(last_messages):
				user['lastMessages'] = get_user_latest_messages(id)

			if bool(total_messages):
				user['totalMessages'] = get_user_total_messages(id)

			return {'user': user}, 200
		except Exception as e:
			print(e)


def get_user_total_messages(id):
	total_channel_messages = select(m for m in ChannelMessage if m.fromUser.id == uuid.UUID(id)).count()
	total_room_messages = select(m for m in RoomMessage if m.user.id == uuid.UUID(id)).count()
	return total_channel_messages + total_room_messages


def get_common_room(id):
	private = "PRIVATE"
	user_private_rooms = select(p.room for p in RoomParticipant if
										 p.user.id == uuid.UUID(request.user['id']) and raw_sql('room.type = $private'))
	room_id = select(
		r.id for r in user_private_rooms for p in RoomParticipant if
		r.id == p.room.id and p.user.id == uuid.UUID(id)).first()
	return room_id


def get_user_information(id):
	total_chats = select(p for p in RoomParticipant if p.user.id == uuid.UUID(id)).count()
	total_channel_messages = select(m for m in ChannelMessage if m.fromUser.id == uuid.UUID(id)).count()
	total_room_messages = select(m for m in RoomMessage if m.user.id == uuid.UUID(id)).count()
	return {'totalChats': total_chats, 'totalChannelMessages': total_channel_messages,
			  'totalRoomMessages': total_room_messages}


def get_user_latest_messages(id):
	latest_messages = []

	user_channel_messages = select(m for m in ChannelMessage if m.fromUser.id == uuid.UUID(id)).order_by(
		lambda m: desc(m.created_at))[:9]

	user_rooms = select(
		r for r in Room for p in RoomParticipant if r.id == p.room.id and p.user.id == uuid.UUID(id))

	for room in user_rooms:
		room_message = select(m for m in RoomMessage if room.id == m.roomId) \
			.order_by(lambda m: desc(m.created_at)).first()

		if not bool(room_message):
			continue

		room_participants = select(
			p for p in RoomParticipant
			if str(p.room.id) == room.id and p.user.id != uuid.UUID(id))

		isUserMessage = id == str(room_message.user.id)
		names = [p.user.name for p in room_participants]
		latest_messages.append(
			{'created_at': str(room_message.created_at), 'names': names, 'isRoom': True, 'message': room_message.message,
			 'isYourMessage': isUserMessage})

	channels = []
	for m in user_channel_messages:
		if m.channelId not in channels:
			channels.append(m.channelId)
			latest_messages.\
				append(
				{'created_at': str(m.created_at), 'channel': m.channelId, 'isRoom': False, 'message': m.message})

	return sorted(latest_messages, key=lambda k: k['created_at'], reverse=True)[:3]
