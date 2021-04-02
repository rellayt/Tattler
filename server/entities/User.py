import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey
from connection import db


class User(db.Entity):
    _table_ = 'user'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    name = Required(str, unique=True, max_len=20)
    email = Required(str, unique=True, max_len=32)
    password = Required(str, max_len=256)
    created_at = Required(datetime, default=datetime.utcnow())
    updated_at = Required(datetime, default=datetime.utcnow())
