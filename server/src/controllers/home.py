from flask_restful import Resource

class HomeController(Resource):
    def get(self):
        return 'Tattler API'
