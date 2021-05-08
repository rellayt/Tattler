import uuid
from flask_socketio import emit
from flask import request
from pony.orm import db_session, desc, select, delete
from src.entities.Room import Room
from src.entities.RoomMessage import RoomMessage
from src.entities.RoomParticipant import RoomParticipant
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.middlewares.messages import room_message_fields_validation

room_typing_users = []


def room(socketio):
    @socketio.on('JOIN_ROOM', namespace='/room')
    @jwt_decode_user
    @db_session
    def join(data):
        try:
            roomId = data['roomId']
            print(request.user['name'], ' joined room ', roomId)
            check_not_displayed(roomId)
            emit_room_participants(roomId)
            emit_room_messages(roomId)
        except Exception as e:
            print(e)

    @socketio.on('JOIN', namespace='/room')
    @jwt_decode_user
    @db_session
    def join():
        try:
            userId = request.user['id']
            emit_user_overview(userId)
        except Exception as e:
            print(e)

    def emit_room_participants(room_id):
        try:
            user_id = request.user['id']
            participants = RoomParticipant.select(lambda p: p.room.id == room_id and p.user.id != uuid.UUID(user_id))
            emit(f'ROOM_USERS_{room_id}', {'users': [{'name': p.user.name, 'id': str(p.user.id)} for p in participants]})
        except Exception as e:
            print(e)

    def check_not_displayed(room_id):
        try:
            user_id = request.user['id']
            last_room_message = RoomMessage.select(lambda p: p.roomId == room_id).order_by(
                    lambda p: desc(p.created_at)).first()

            if last_room_message.user.id != uuid.UUID(user_id):
                last_room_message.displayed = True
            emit_overview_to_participants(room_id)
        except Exception as e:
            print(e)

    def emit_room_messages(room_id):
        try:
            channel_messages = RoomMessage.select(roomId=room_id).order_by(lambda p: desc(p.created_at))
            result = {'messages': [msg.json() for msg in channel_messages]}
            emit(f'ROOM_MESSAGES_{room_id}', result, broadcast=True)
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
                r.id for r in Room for p in RoomParticipant if r.id == p.room.id and p.user.id == uuid.UUID(user_id))
            room_messages = []
            for roomId in user_rooms:
                room_message = select(m for m in RoomMessage if roomId == m.roomId).order_by(
                    lambda m: desc(m.created_at)).first()
                if not bool(room_message):
                    continue
                room_participants = select(
                    p.user.name for p in RoomParticipant if str(p.room.id) == roomId and str(p.user.id) != user_id)
                room_message_json = room_message.overview_json()
                room_message_json['isYourMessage'] = user_id == str(room_message.user.id)
                room_message_json['names'] = [n for n in room_participants]
                room_messages.append(room_message_json)
            # print(f'ROOM_OVERVIEW_{user_id}', {'overviewMessages': room_messages})
            room_messages.sort(key=lambda item: item['created_at'], reverse=True)
            emit(f'ROOM_OVERVIEW_{user_id}', {'overviewMessages': room_messages}, broadcast=True)
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
            # room_typing_users.append({roomId: userId})
            emit(f'TYPING_ROOM_{room_id}', {'id': user_id}, broadcast=True)
        except Exception as e:
            print(e)

    @socketio.on('END_TYPING', namespace='/room')
    @jwt_decode_user
    @db_session
    def end_typing(data):
        try:
            [user_id, room_id] = destructure(data, 'userId', 'roomId')
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
                    emit(f'ROOM_DESTROY_{user_id}', {'message': 'ROOM DESTROYED'}, broadcast=True)
                    break
        except Exception as e:
            print(e)
