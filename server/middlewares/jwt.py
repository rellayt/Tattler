import uuid
from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity
from pony.orm import db_session
from functools import wraps
from entities.User import User


def jwt_decode_user(f):
    @wraps(f)
    @jwt_required()
    @db_session
    def decoration(*args, **kwargs):
        user_id = get_jwt_identity()
        request.user = User.get(id=uuid.UUID(user_id))
        return f(*args, **kwargs)

    return decoration

