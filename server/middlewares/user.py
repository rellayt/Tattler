from functools import wraps
from flask import request
from flask_restful import abort
from marshmallow import ValidationError
import json
from validators.user import UserSchema


def user_fields_validator(f):
    @wraps(f)
    def decoration(*args, **kwargs):
        try:
            UserSchema().load(json.loads(request.data))
        except ValidationError as err:
            abort(409, validation_errors=err.messages)
        return f(*args, **kwargs)

    return decoration
