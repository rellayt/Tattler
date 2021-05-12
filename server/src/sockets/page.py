import uuid
from datetime import datetime
from flask import request
from pony.orm import db_session
from src.entities.User import User
from src.middlewares.jwt import jwt_decode_user


def page(socketio):
	@socketio.on('JOIN_PAGE')
	@jwt_decode_user
	@db_session
	def join_page():
		try:
			print(request.user['name'], 'has joined to page')
			user_id = request.user['id']
			user = User.get(id=uuid.UUID(user_id))
			user.last_logged = datetime.now()
		except Exception as e:
			print(e)

	@socketio.on('disconnect')
	@jwt_decode_user
	@db_session
	def disconnect():
		user_id = request.user['id']
		user = User.get(id=uuid.UUID(user_id))
		user.last_logged = datetime.now()
		print(request.user['name'], 'left the page')

