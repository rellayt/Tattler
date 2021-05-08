from marshmallow import Schema, fields
from marshmallow.validate import Length, Range


class ChannelMessageSchema(Schema):
    message = fields.String(required=True, validate=Length(min=1, max=300))
    channelId = fields.Integer(required=True, validate=Range(min=1, max=3))


class RoomMessageSchema(Schema):
    message = fields.String(required=True, validate=Length(min=1, max=300))
    roomId = fields.String(required=True)
