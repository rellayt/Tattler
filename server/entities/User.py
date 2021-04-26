import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey, Optional, Set
from connection import db
# from entities.PublicMessage import PublicMessage

class User(db.Entity):
    _table_ = 'user'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    name = Required(str, unique=True, max_len=20)
    email = Required(str, unique=True, max_len=32)
    password = Required(str, max_len=256)
    public_message = Set("PublicMessage")
    created_at = Required(datetime, default=datetime.utcnow())
    updated_at = Required(datetime, default=datetime.utcnow())

    def json(self):
        return {'id': str(self.id), 'name': self.name, 'email': self.email, 'created_at': str(self.created_at)}
