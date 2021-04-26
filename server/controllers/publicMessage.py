from flask import request
from flask_jwt_extended import jwt_required
from flask_restful import Resource
from pony.orm import db_session, select
import json
from pony.orm.serialization import to_dict
from entities.PublicMessage import PublicMessage
from helpers import destructure
from middlewares.jwt import jwt_decode_user
from middlewares.publicMessages import public_message_fields_validation


class PublicMessageController(Resource):
    @public_message_fields_validation
    @jwt_decode_user
    @db_session
    def post(self):
        try:
            [message, channelId] = destructure(json.loads(request.data), 'message', 'channelId')
            PublicMessage(message=message, channelId=channelId, fromUser=request.user)
            publicMessages = PublicMessage.select(channelId=channelId)
            result = {'messages': [msg.json() for msg in publicMessages]}
            return result, 200
        except Exception as e:
            print(e)

    @jwt_required()
    @db_session
    def get(self):
        try:
            channelId = request.args.get('channel', 1)
            print('channel: ', channelId)
            publicMessages = PublicMessage.select(channelId=channelId)
            result = {'messages': [msg.json() for msg in publicMessages]}
            return result, 200
        except Exception as e:
            print(e)
