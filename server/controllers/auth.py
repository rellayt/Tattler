from flask import request
from flask_restful import Resource
from pony.orm import db_session
import json
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required
from entities.User import User
from middlewares.auth import register_verification, login_verification, register_fields_validation, \
    login_fields_validation
from helpers import destructure
from utility.auth import hash_password

class RegisterController(Resource):
    @register_fields_validation
    @register_verification
    @db_session
    def post(self):
        try:
            [name, email, password] = destructure(json.loads(request.data), 'name', 'email', 'password')
            user = User(name=name, email=email, password=hash_password(password))
            response = {'user': user.json(),
                        'access_token': create_access_token(identity=str(user.id)),
                        'refresh_token': create_refresh_token(identity=str(user.id))}
            return response, 200
        except Exception as e:
            print(e)


class LoginController(Resource):
    @login_fields_validation
    @login_verification
    def post(self):
        try:
            user = request.user
            response = {'user': request.user.json(),
                        'access_token': create_access_token(identity=str(user.id)),
                        'refresh_token': create_refresh_token(identity=str(user.id))}
            return response
        except Exception as e:
            print(e)
