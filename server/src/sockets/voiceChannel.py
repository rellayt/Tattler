from typing import List
from flask import request
from flask_socketio import emit
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.models.VoiceChannelUser import VoiceChannelUser
from src.utility.array import ArrayUtils

voice_channel_participants: List[VoiceChannelUser] = []
ArrUtils = ArrayUtils[VoiceChannelUser]


def voice_channel(socketio):
	@socketio.on_error('/voice_channel')
	def error_handler(e):
		emit('TOKEN_EXPIRED')

	@socketio.on('JOIN', namespace='/voice_channel')
	@jwt_decode_user
	def join_voice_channel():
		try:
			[id, name, avatar] = destructure(request.user, 'id', 'name', 'avatar')
			user_exist = ArrUtils.exists_by_id(id, voice_channel_participants)
			if not user_exist:
				participant = VoiceChannelUser(id, name, avatar)
				voice_channel_participants.append(participant)
				print(name, 'joined voice channel')
			else:
				print(name, 'is already inside voice channel')
			emit_voice_channel_participants()
		except Exception as e:
			print(e)

	@socketio.on('START_SPEAKING', namespace='/voice_channel')
	@jwt_decode_user
	def start_speaking():
		try:
			process_speaking(request.user, True)
		except Exception as e:
			print(e)

	@socketio.on('STOP_SPEAKING', namespace='/voice_channel')
	@jwt_decode_user
	def stop_speaking():
		try:
			process_speaking(request.user, False)
		except Exception as e:
			print(e)

	def emit_voice_channel_participants():
		emit('CHANNEL_PARTICIPANTS', {'participants': [p.to_json() for p in voice_channel_participants]}, broadcast=True)

	@socketio.on('LEAVE_VOICE_CHANNEL', namespace='/voice_channel')
	@jwt_decode_user
	def disconnect():
		[id, name] = destructure(request.user, 'id', 'name')
		print(name, 'left the voice channel')

		ArrUtils.remove_by_id(id, voice_channel_participants)
		emit_voice_channel_participants()

	def process_speaking(user, speaking_value):
		[id, name, avatar] = destructure(user, 'id', 'name', 'avatar')
		user_exist = ArrUtils.exists_by_id(id, voice_channel_participants)
		if user_exist:
			user = VoiceChannelUser(id, name, avatar, speaking_value)
			ArrUtils.find_by_id_and_replace(user, voice_channel_participants)
			emit_voice_channel_participants()
		else:
			join_voice_channel()
