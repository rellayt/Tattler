import os
from datetime import timedelta
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_restful import Api
from connection import db
from routes import load_routes
from utility.error_handler import response_feedback
from flask_cors import CORS
from flask_socketio import SocketIO
from sockets import initializeSockets

db.generate_mapping(create_tables=True)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
api = Api(app, "/api")
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
cors = CORS(app, resources={r"/api/*": {"origins": "https://localhost:3000/"}})

jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=8)
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)


@app.errorhandler(404)
def page_not_found(e):
    return response_feedback(404, str(e))


initializeSockets(socketio)

if __name__ == '__main__':
    load_routes(api)
    socketio.run(app)
    # app.run(debug=True)
