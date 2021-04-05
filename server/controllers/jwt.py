from flask import jsonify
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token


class TokenRefresh(Resource):
    @jwt_required(refresh=True)
    def get(self):
        try:
            user_id = get_jwt_identity()
            access_token = create_access_token(identity=user_id, fresh=False)
            return jsonify(access_token=access_token)
        except Exception as e:
            print(e)
