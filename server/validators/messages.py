from marshmallow import Schema, fields
from marshmallow.validate import Length, Range


class PublicMessageSchema(Schema):
    message = fields.String(required=True, validate=Length(min=1, max=300))
    channelId = fields.Integer(required=True, validate=Range(min=1, max=3))
