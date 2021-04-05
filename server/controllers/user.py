from flask import request
from flask_restful import Resource
from middlewares.jwt import jwt_decode_user

class UserController(Resource):
    @jwt_decode_user
    def get(self):
        try:
            return {'user': request.user.json()}, 200
        except Exception as e:
            print(e)
