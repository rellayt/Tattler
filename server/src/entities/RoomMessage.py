import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey
from src.connection import db
from src.entities.User import User


class RoomMessage(db.Entity):
    _table_ = 'roomMessage'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    message = Required(str, max_len=300)
    roomId = Required(str)
    user = Required(User)
    displayed = Required(bool)
    created_at = Required(datetime, default=datetime.now)
    updated_at = Required(datetime, default=datetime.now)

    def json(self):
        return {'name': str(self.user.name), 'message': self.message, 'created_at': str(self.created_at),
                'userId': str(self.user.id), 'displayed': self.displayed, 'roomId': self.roomId}

    def overview_json(self):
        return {'message': self.message, 'created_at': str(self.created_at),
                'displayed': self.displayed, 'roomId': self.roomId}
