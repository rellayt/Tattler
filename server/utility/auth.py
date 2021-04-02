import binascii
from os import urandom
from hashlib import sha256, pbkdf2_hmac

def hash_password(password):
    salt = sha256(urandom(60)).hexdigest().encode('ascii')
    hashed_password = pbkdf2_hmac('sha512', password.encode('utf-8'),
                                  salt, 1000)
    hashed_password = binascii.hexlify(hashed_password)
    return (salt + hashed_password).decode('ascii')


def verify_password(stored_password, provided_password):
    salt = stored_password[:64]
    stored_password = stored_password[64:]
    hashed_password = pbkdf2_hmac('sha512', provided_password.encode('utf-8'),
                                  salt.encode('ascii'), 1000)
    hashed_password = binascii.hexlify(hashed_password).decode('ascii')
    return hashed_password == stored_password

