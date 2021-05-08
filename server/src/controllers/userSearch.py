from flask import request
from flask_restful import Resource
from pony.orm import select
import re
from src.entities.User import User
from src.middlewares.jwt import jwt_decode_user

class UserSearchController(Resource):
    @jwt_decode_user
    def get(self):
        try:
            query = request.args.get('q')
            if query is None or query == '':
                return {'users': []}, 200

            regex_test = re.compile(query, re.IGNORECASE)

            users = select(user for user in User if user.name is not request.user['name'])
            users_json = [user.json() for user in users]
            filtered = list(filter(lambda user: bool(regex_test.search(user['name'])), users_json))

            return {'users': filtered}, 200
        except Exception as e:
            print(e)
