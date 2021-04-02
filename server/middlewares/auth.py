from functools import wraps
from flask import request
from flask_restful import abort
import json

from pony.orm import select, db_session
from entities.User import User
from helpers import destructure

def register_validator(f):
    @wraps(f)
    @db_session
    def decoration(*args, **kwargs):
        errors = {}
        [name, email] = destructure(json.loads(request.data), 'name', 'email')
        data = [{'name': name}, {'email': email}]

        for prop in data:
            for key in prop:
                value_match = select(user for user in User if getattr(user, key).lower() == prop[key].lower())
                if value_match:
                    errors[key] = f'{key.capitalize()} already exists'

        return abort(409, validation_errors=errors) if len(errors) > 0 else f(*args, **kwargs)

    return decoration

def login_validator(f):
    @wraps(f)
    @db_session
    def decoration(*args, **kwargs):
        errors = {}
        [name, email] = destructure(json.loads(request.data), 'name', 'email')
        data = [{'name': name}, {'email': email}]

        for prop in data:
            for key in prop:
                value_match = select(user for user in User if getattr(user, key).lower() == prop[key].lower())
                if value_match:
                    errors[key] = f'{key.capitalize()} already exists'

        return abort(409, validation_errors=errors) if len(errors) > 0 else f(*args, **kwargs)

    return decoration
