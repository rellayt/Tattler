import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey
from src.connection import db
from src.entities.User import User

class ChannelMessage(db.Entity):
    _table_ = 'channelMessage'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    message = Required(str,  max_len=300)
    channelId = Required(int, min=1, max=3)
    fromUser = Required(User)
    created_at = Required(datetime, default=datetime.now)
    updated_at = Required(datetime, default=datetime.now)

    def json(self):
        return {'id': str(self.id), 'message': self.message, 'created_at': str(self.created_at), 'from': {
            'userId': str(self.fromUser.id), 'name': str(self.fromUser.name)}}
