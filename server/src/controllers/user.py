import uuid
from flask import request
from flask_restful import Resource
from pony.orm import select, raw_sql
from src.entities.ChannelMessage import ChannelMessage
from src.entities.RoomMessage import RoomMessage
from src.entities.RoomParticipant import RoomParticipant
from src.entities.User import User
from src.middlewares.jwt import jwt_decode_user


class UserController(Resource):
	@jwt_decode_user
	def get(self):
		try:
			id = request.args.get('id')
			# info = request.args.get('info')
			# last_messages = request.args.get('last_messages')
			if id is None:
				return {'user': request.user}, 200

			user = User.get(id=id).json()

			user['totalMessages'] = get_user_total_messages(id)
			user['roomId'] = get_common_room(id)
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
