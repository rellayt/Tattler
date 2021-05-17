from datetime import datetime
from pony.orm import Required, PrimaryKey, Set
from src.connection import db
from enum import Enum
from src.helpers import get_room_id

class RoomType(Enum):
    MULTI = 'MULTI'
    PRIVATE = 'PRIVATE'

    def __str__(self):
        return self.name

class Room(db.Entity):
    _table_ = 'room'
    id = PrimaryKey(str, default=get_room_id)
    type = Required(RoomType)
    room_participant = Set("RoomParticipant")
    notifications = Set("Notification")
    created_at = Required(datetime, default=datetime.now)
    updated_at = Required(datetime, default=datetime.now)

    def json(self):
        return {'id': str(self.id), 'type': str(self.type)}

    def get_type(self):
        return {'type': str(self.type)}

