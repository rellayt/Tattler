class VoiceChannelUser:
	def __init__(self, id, name, avatar, is_speaking=False):
		self.id = id
		self.name = name
		self.avatar = avatar
		self.is_speaking = is_speaking

	def set_is_speaking(self, is_speaking):
		self.is_speaking = is_speaking

	def get_id(self):
		return self.id

	def to_json(self):
		return {'id': str(self.id), 'name': self.name, 'avatar': self.avatar, 'isSpeaking': self.is_speaking}
