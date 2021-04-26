from functools import wraps
from flask import request
from flask_restful import abort
import json
from marshmallow import ValidationError
from validators.messages import PublicMessageSchema

def public_message_fields_validation(f):
    @wraps(f)
    def decoration(*args, **kwargs):
        try:
            PublicMessageSchema().load(json.loads(request.data))
        except ValidationError as err:
            abort(409, validation_errors=err.messages)
        return f(*args, **kwargs)

    return decoration
