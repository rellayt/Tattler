from functools import wraps
from flask import request
from flask_restful import abort
import json
from marshmallow import ValidationError
from pony.orm import db_session
from entities.User import User
from helpers import destructure
from utility.auth import verify_password
from validators.auth import RegisterSchema, LoginSchema


def register_verification(f):
    @wraps(f)
    @db_session
    def decoration(*args, **kwargs):
        errors = {}
        [name, email] = destructure(json.loads(request.data), 'name', 'email')
        data = [{'name': name}, {'email': email}]

        for prop in data:
            for key in prop:
                value_match = User.select(lambda user: getattr(user, key).lower() == prop[key].lower())
                if value_match:
                    errors[key] = f'{key.capitalize()} already exists'

        return abort(409, verification_errors=errors) if len(errors) > 0 else f(*args, **kwargs)

    return decoration


def register_fields_validation(f):
    @wraps(f)
    def decoration(*args, **kwargs):
        try:
            RegisterSchema().load(json.loads(request.data))
        except ValidationError as err:
            abort(409, validation_errors=err.messages)
        return f(*args, **kwargs)

    return decoration


def login_verification(f):
    @wraps(f)
    @db_session
    def decoration(*args, **kwargs):
        [login, password] = destructure(json.loads(request.data), 'login', 'password')

        user = User.select(lambda user: user.name.lower() is login.lower() or user.email.lower() is login.lower()).first()

        if user is None:
            abort(409, verification_error='User not found')

        match_password = verify_password(user.password, password)

        if not match_password:
            abort(409, verification_error='Incorrect password')

        request.user = user
        return f(*args, **kwargs)

    return decoration


def login_fields_validation(f):
    @wraps(f)
    def decoration(*args, **kwargs):
        try:
            LoginSchema().load(json.loads(request.data))
        except ValidationError as err:
            abort(409, validation_errors=err.messages)
        return f(*args, **kwargs)

    return decoration
