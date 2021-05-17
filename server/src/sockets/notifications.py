import uuid
from time import sleep

from flask_socketio import emit
from pony.orm import db_session, select, desc
from src.helpers import destructure
from src.middlewares.jwt import jwt_decode_user
from src.entities.Notification import Notification


def notifications(socketio):
	@socketio.on('CREATE_NOTIFICATIONS', namespace='/notifications')
	@jwt_decode_user
	@db_session
	def create_notifications(data):
		try:
			[sender, recipients, roomId] = destructure(data, 'sender', 'recipients', 'roomId')
			notification_instance = select(n for n in Notification if roomId == n.room.id).exists()
			if not notification_instance:
				for recipient in recipients:
					Notification(sender=sender['id'], recipient=recipient['id'], room=roomId)

				for recipient in recipients:
					# sleep(0.25)
					emit(f"NEW_NOTIFICATIONS_{recipient['id']}", get_user_notifications(recipient['id']), broadcast=True,
						  namespace='')

		except Exception as e:
			print(e)

	@socketio.on('MARK_AS_CHECKED', namespace='/notifications')
	@jwt_decode_user
	@db_session
	def mark_as_checked(data):
		try:
			[notification_id, user_id] = destructure(data, 'notificationId', 'userId')
			notification = Notification.select(lambda n: n.id == uuid.UUID(notification_id)).first()
			notification.displayed = True

			emit(f'NOTIFICATIONS_{user_id}', get_user_notifications(user_id), namespace='', broadcast=True)
		except Exception as e:
			print(e)


@db_session
def get_user_notifications(id):
	notifications = []
	user_notifications = select(n for n in Notification if n.recipient.id == uuid.UUID(id)).order_by(
		lambda n: desc(n.created_at))[:6]

	for n in user_notifications:
		room_id = n.room.id
		recipients_name_query = select(
			n.recipient.name for n in Notification if n.room.id == room_id and n.recipient.id is not uuid.UUID(id))

		recipients_name = [n for n in recipients_name_query]
		group = len(recipients_name) != 0
		if group:
			last_name = recipients_name.pop()
			names = ", ".join(recipients_name)
			message = f"{n.sender.name} has created group with you{', ' if len(names) > 0 else ''}{names} and {last_name}"
		else:
			message = f'{n.sender.name} has created room with you'

		notification = {'message': message.capitalize(), 'displayed': n.displayed, 'roomId': room_id, 'group': group, 'id': str(n.id)}
		notifications.append(notification)

	return {'notifications': notifications}
