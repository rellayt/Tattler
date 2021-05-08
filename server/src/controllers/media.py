import os

from flask import send_from_directory, render_template
from flask_restful import Resource
from src.middlewares.jwt import jwt_decode_user

class MediaController(Resource):
	# @jwt_decode_user
	def get(self, id):
		try:
			from src.main import app
			return send_from_directory(app.config['MEDIA'], filename=f'avatar_{id}.png', as_attachment=False)
		except Exception as e:
			print(e)
