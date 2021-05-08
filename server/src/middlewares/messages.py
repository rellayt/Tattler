from functools import wraps
from flask_restful import abort
import json
from marshmallow import ValidationError
from src.validators.messages import ChannelMessageSchema
from src.validators.messages import RoomMessageSchema


def channel_message_fields_validation(f):
	@wraps(f)
	def decoration(*args, **kwargs):
		try:
			data = json.loads(json.dumps(args))[0]
			ChannelMessageSchema().load(data)
		except ValidationError as err:
			abort(409, validation_errors=err.messages)
		return f(*args, **kwargs)

	return decoration


def room_message_fields_validation(f):
	@wraps(f)
	def decoration(*args, **kwargs):
		try:
			data = json.loads(json.dumps(args))[0]
			RoomMessageSchema().load(data)
		except ValidationError as err:
			abort(409, validation_errors=err.messages)
		return f(*args, **kwargs)

	return decoration
