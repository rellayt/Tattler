from flask_socketio import emit

def initializeSockets(socketio):
    @socketio.on('my event')
    def handle_my_custom_event(json):
        print('received json: ' + str(json))

    @socketio.on('joined', namespace='/public_channel')
    def joined(json):
        print('received: ', str(json))
        emit('OK')