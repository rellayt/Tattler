from datetime import datetime
import random
import string


def destructure(property, *keys):
    return [property[key] if key in property else None for key in keys]


def get_current_datetime() -> datetime:
    return datetime.now()


def get_room_id() -> str:
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(12))
