from flask import request
from flask_restful import Resource
from pony.orm import db_session
import json
from flask_jwt_extended import create_access_token, create_refresh_token, set_refresh_cookies
from src.entities.User import User
from src.middlewares.auth import register_verification, login_verification, register_fields_validation, \
	login_fields_validation
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.utility.auth import hash_password


class RegisterController(Resource):
	@register_fields_validation
	@register_verification
	@db_session
	def post(self):
		try:
			[name, email, password] = destructure(json.loads(request.data), 'name', 'email', 'password')
			user = User(name=name, email=email, password=hash_password(password))
			refresh_token = create_refresh_token(identity=str(user.id))
			response = {'user': user.json(), 'accessToken': create_access_token(identity=str(user.id))}
			return response, 200, {'Set-Cookie': f'refreshToken={refresh_token};path=/;httponly=true'}
		except Exception as e:
			print(e)


class LoginController(Resource):
	@login_fields_validation
	@login_verification
	def post(self):
		try:
			user = request.user
			refresh_token = create_refresh_token(identity=str(user.id))
			response = {'user': request.user.json(), 'accessToken': create_access_token(identity=str(user.id))}

			return response, 200, {'Set-Cookie': f'refreshToken={refresh_token};path=/;httponly=true'}
		except Exception as e:
			print(e)


class NameAvailabilityController(Resource):
	@db_session
	def get(self, name):
		try:
			user = User.select(lambda user: user.name.lower() is name.lower()).first()
			return {'availability': not bool(user)}
		except Exception as e:
			print(e)


class EmailAvailabilityController(Resource):
	@db_session
	def get(self, email):
		try:
			user = User.select(lambda user: user.email.lower() is email.lower()).first()
			return {'availability': not bool(user)}
		except Exception as e:
			print(e)


class AuthenticatorController(Resource):
	@jwt_decode_user
	def post(self):
		try:
			access_token = create_access_token(identity=request.user['id'], fresh=False)
			print('auth')
			return {'user': request.user, 'accessToken': access_token}
		except Exception as e:
			print(e)

class LogoutController(Resource):
	def post(self):
		try:
			print('Logout')
			return 200, {'Set-Cookie': 'refreshToken=deleted;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT;'}
		except Exception as e:
			print(e)
