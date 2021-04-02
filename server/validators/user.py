from marshmallow import Schema, fields
from marshmallow.validate import Length


class UserSchema(Schema):
    name = fields.String(required=True, validate=Length(min=3, max=32))
    email = fields.Email(required=True, validate=Length(min=3, max=32))
    password = fields.String(required=True, validate=Length(min=3, max=32))

