import os
from datetime import timedelta
from enum import Enum
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_restful import Api
from src.connection import db
from src.routes import load_routes
from src.sockets.channels import channels
from src.sockets.notifications import notifications
from src.sockets.page import page
from src.sockets.room import room
from src.sockets.voiceChannel import voice_channel
from src.utility.enumConverter import EnumConverter
from src.utility.error_handler import response_feedback
from flask_cors import CORS
from flask_socketio import SocketIO

APP_ROOT = os.path.dirname(os.path.abspath(__file__ + "/../"))
MEDIA_FOLDER = os.path.join(APP_ROOT, 'public', 'media')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
api = Api(app, "/api")

CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000/"}}, support_credentials=True)

jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=60)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)
app.config["PROPAGATE_EXCEPTIONS"] = True
app.config["MEDIA"] = MEDIA_FOLDER
app.config['CORS_HEADERS'] = 'Set-Cookie'
JWT_TOKEN_LOCATION = ['cookies']

@app.errorhandler(404)
def page_not_found(e):
	return response_feedback(404, str(e))


socketio = SocketIO(app, cors_allowed_origins="*")
channels(socketio)
room(socketio)
page(socketio)
notifications(socketio)
voice_channel(socketio)

if __name__ == '__main__':
	db.provider.converter_classes.append((Enum, EnumConverter))
	db.generate_mapping(create_tables=True)
	load_routes(api)
	socketio.run(app)
