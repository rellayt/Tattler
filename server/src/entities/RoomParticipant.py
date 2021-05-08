import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey
from src.connection import db
from src.entities.User import User
from src.entities.Room import Room

class RoomParticipant(db.Entity):
    _table_ = 'roomParticipant'
    id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
    room = Required(Room)
    user = Required(User)
    created_at = Required(datetime, default=datetime.now)
    updated_at = Required(datetime, default=datetime.now)

    def json(self):
        return {'userId': str(self.user.id), 'roomId': str(self.room.id)}
