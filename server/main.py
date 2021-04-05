import os
from datetime import timedelta

from flask import Flask
from flask_jwt_extended import JWTManager
from flask_restful import Api
from connection import db
from routes import load_routes
from utility.error_handler import response_feedback

db.generate_mapping(create_tables=True)

app = Flask(__name__)
api = Api(app, "/api")

jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(minutes=8)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)

@app.errorhandler(404)
def page_not_found(e):
    return response_feedback(404, str(e))


if __name__ == '__main__':
    load_routes(api)
    app.run(debug=True)
