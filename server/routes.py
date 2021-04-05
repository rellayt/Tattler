from controllers.auth import RegisterController, LoginController
from controllers.home import HomeController
from controllers.jwt import TokenRefresh
from controllers.user import UserController


def load_routes(api):
    api.add_resource(HomeController, "/")
    api.add_resource(RegisterController, "/auth/register")
    api.add_resource(LoginController, "/auth/login")
    api.add_resource(UserController, "/user")
    api.add_resource(TokenRefresh, "/refresh_token")
