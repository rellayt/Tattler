from flask_socketio import emit
from flask import request
from pony.orm import db_session, desc
from src.entities.ChannelMessage import ChannelMessage
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.middlewares.messages import channel_message_fields_validation

channel_typing_users = [[], [], []]


def channels(socketio):
	@socketio.on_error('/public_channel')
	def error_handler(e):
		emit('TOKEN_EXPIRED')

	@socketio.on('JOIN', namespace='/public_channel')
	@jwt_decode_user
	@db_session
	def join(data):
		try:
			channelId = data['channelId']
			print(request.user['name'], ' joined channel ', channelId)
			emit_messages({'channelId': channelId})
			emit(f'TYPING_CHANNEL_{channelId}', {'typingUsers': channel_typing_users[channelId - 1]}, broadcast=True)
		except Exception as e:
			print(e)

	def emit_messages(data):
		try:
			channelId = data['channelId']
			channel_messages = ChannelMessage.select(channelId=channelId).order_by(lambda p: desc(p.created_at))
			result = {'messages': [msg.json() for msg in channel_messages]}
			emit(f'MESSAGES_CHANNEL_{channelId}', result, broadcast=True)
		except Exception as e:
			print(e)

	@socketio.on('ADD_MESSAGE', namespace='/public_channel')
	@channel_message_fields_validation
	@jwt_decode_user
	@db_session
	def add_message(data):
		try:
			[message, channelId] = destructure(data, 'message', 'channelId')
			ChannelMessage(message=message, channelId=channelId, fromUser=request.user['id'])
			emit_messages({'channelId': channelId})
		except Exception as e:
			print(e)

	@socketio.on('START_TYPING', namespace='/public_channel')
	@jwt_decode_user
	@db_session
	def start_typing(data):
		try:
			[userId, channelId] = destructure(data, 'userId', 'channelId')
			if userId not in channel_typing_users[channelId - 1]:
				channel_typing_users[channelId - 1].append(userId)
			emit(f'TYPING_CHANNEL_{channelId}', {'typingUsers': channel_typing_users[channelId - 1]}, broadcast=True)
		except Exception as e:
			print(e)

	@socketio.on('END_TYPING', namespace='/public_channel')
	@jwt_decode_user
	@db_session
	def end_typing(data):
		try:
			[userId, channelId] = destructure(data, 'userId', 'channelId')
			if userId in channel_typing_users[channelId - 1]:
				channel_typing_users[channelId - 1].remove(userId)
			emit(f'TYPING_CHANNEL_{channelId}', {'typingUsers': channel_typing_users[channelId - 1]}, broadcast=True)
		except Exception as e:
			print(e)
