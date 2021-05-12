from flask import request
from flask_restful import Resource
import json
from src.entities.Room import Room, RoomType
from src.entities.RoomParticipant import RoomParticipant
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user


class RoomController(Resource):
	@jwt_decode_user
	def post(self):
		try:
			[dataType, users] = destructure(json.loads(request.data), 'isPrivate', 'users')
			type = RoomType.PRIVATE if bool(dataType) else RoomType.MULTI
			room = Room(type=type)
			if type == RoomType.PRIVATE:
				RoomParticipant(room=room.id, user=users[0])
			else:
				for user in users:
					RoomParticipant(room=room.id, user=user)
			RoomParticipant(room=room.id, user=request.user['id'])
			return {'room': room.json()}, 200
		except Exception as e:
			print(e)
