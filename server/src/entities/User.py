import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey, Set
from src.connection import db


class User(db.Entity):
	_table_ = 'user'
	id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
	name = Required(str, unique=True, max_len=20)
	email = Required(str, unique=True, max_len=32)
	password = Required(str, max_len=256)
	public_message = Set("ChannelMessage")
	message = Set("RoomMessage")
	room_participant = Set("RoomParticipant")
	sender = Set("Notification", reverse="sender")
	recipient = Set("Notification", reverse="recipient")
	avatar = Required(bool, default=False)
	last_logged = Required(datetime, default=datetime.now)
	created_at = Required(datetime, default=datetime.now)
	updated_at = Required(datetime, default=datetime.now)

	def json(self):
		return {'id': str(self.id), 'name': self.name, 'email': self.email, 'created_at': str(self.created_at),
				  'avatar': self.avatar, 'lastLogged': str(self.last_logged)}
