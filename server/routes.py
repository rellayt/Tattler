from controllers.auth import RegisterController, LoginController
from controllers.home import HomeController

def load_routes(api):
    api.add_resource(HomeController, "/")
    api.add_resource(RegisterController, "/auth/register")
    api.add_resource(LoginController, "/auth/login")