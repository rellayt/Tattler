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
            [dataType, user_id] = destructure(json.loads(request.data), 'isPrivate', 'userId')
            type = RoomType.PRIVATE if bool(dataType) else RoomType.MULTI
            room = Room(type=type)
            RoomParticipant(room=room.id, user=user_id)
            RoomParticipant(room=room.id, user=request.user['id'])
            return {'room': room.json()}, 200
        except Exception as e:
            print(e)
