import uuid
from datetime import datetime
from pony.orm import Required, PrimaryKey
from src.connection import db
from src.entities.User import User


class Notification(db.Entity):
	_table_ = 'notification'
	id = PrimaryKey(uuid.UUID, default=uuid.uuid4)
	sender = Required(User, reverse="sender")
	recipient = Required(User, reverse="recipient")
	displayed = Required(bool)
	created_at = Required(datetime, default=datetime.now)
	updated_at = Required(datetime, default=datetime.now)


def json(self):
	return {'id': str(self.id), 'sender': {'id': str(self.sender.id), 'name': self.sender.name},
			  'recipient': {'id': str(self.recipient.id), 'name': self.recipient.name}, 'created_at': str(self.created_at)}
