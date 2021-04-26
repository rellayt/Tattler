import uuid
from datetime import datetime, timedelta
from pony.orm import Required, PrimaryKey, Set
from connection import db
from entities.User import User

class PublicMessage(db.Entity):
    _table_ = 'publicMessage'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    message = Required(str,  max_len=300)
    channelId = Required(int, min=1, max=3)
    fromUser = Required(User)
    created_at = Required(datetime, default=datetime.utcnow() + timedelta(hours=2))
    updated_at = Required(datetime, default=datetime.utcnow())

    def json(self):
        return {'id': str(self.id), 'message': self.message, 'created_at': str(self.created_at), 'from': {
            'userId': str(self.fromUser.id), 'name': str(self.fromUser.name)}}
