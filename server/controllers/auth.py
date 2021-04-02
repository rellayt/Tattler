from flask import request
from flask_restful import Resource
from pony.orm import db_session
import json
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required

from entities.User import User
from middlewares.auth import register_validator
from middlewares.user import user_fields_validator
from helpers import destructure
from utility.auth import hash_password
from utility.parsers import user_parser


class RegisterController(Resource):
    @staticmethod
    @user_fields_validator
    @register_validator
    @db_session
    def post():
        try:
            [name, email, password] = destructure(json.loads(request.data), 'name', 'email', 'password')
            user = User(name=name, email=email, password=hash_password(password))
            response = {'user': user_parser(user),
                        'access_token': create_access_token(identity=str(user.id)),
                        'refresh_token': create_access_token(identity=str(user.id))}
            return response, 200
        except Exception as e:
            print(e)


class LoginController(Resource):
    @staticmethod
    @user_fields_validator
    @db_session
    def post():
        try:
            # [name, email, password] = destructure(json.loads(request.data), 'name', 'email', 'password')
            return {'user': 'user', 'token': 'asd'}, 200
        except Exception as e:
            print(e)
