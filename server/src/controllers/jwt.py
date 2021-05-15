from flask import jsonify, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token, decode_token
from pony.orm import db_session
from src.entities.User import User


class TokenRefresh(Resource):
	@db_session
	def post(self):
		try:
			refreshToken = request.cookies.get('refreshToken')
			print(refreshToken)
			user_id = decode_token(refreshToken)['sub']
			print()
			user = User.get(id=user_id)
			access_token = create_access_token(identity=user_id, fresh=False)

			print('Token refreshed for: ', user.name)
			return jsonify(accessToken=access_token, user=user.json())
		except Exception as e:
			print(e)
