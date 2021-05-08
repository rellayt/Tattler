import os
from flask import request, send_from_directory
from flask_restful import Resource

from src.entities.User import User
from src.middlewares.jwt import jwt_decode_user
from flask import send_file

class ImageController(Resource):
	@jwt_decode_user
	def post(self):
		try:
			print(request.files)
			if 'image' not in request.files:
				return {'error': 'No image'}, 409
			user_id = request.user['id']
			file = request.files['image']
			from src.main import app
			filename = os.path.join(app.config['MEDIA'], f'avatar_{user_id}.png')
			user = User.get(id=user_id)
			user.avatar = True
			print(user.json())
			file.save(filename)
			return {'path': f'/media/{user_id}'}
		except Exception as e:
			print(e)
