import uuid
from flask import request
from flask_restful import Resource
from pony.orm import select, raw_sql
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

			private = "PRIVATE"
			query = select(p.room for p in RoomParticipant if
								p.user.id == uuid.UUID(request.user['id']) and raw_sql('room.type = $private'))
			roomId = select(
				r.id for r in query for p in RoomParticipant if r.id == p.room.id and p.user.id == uuid.UUID(id)).first()
			user = User.get(id=id).json()
			user['roomId'] = roomId
			return {'user': user}, 200
		except Exception as e:
			print(e)
