from flask import send_from_directory
from flask_restful import Resource
from src.middlewares.jwt import jwt_decode_user


class MediaController(Resource):
	def get(self, id):
		try:
			from src.main import app
			return send_from_directory(app.config['MEDIA'], filename=f'avatar_{id}.png', as_attachment=False)
		except Exception as e:
			print(e)
