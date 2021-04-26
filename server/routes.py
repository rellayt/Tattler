from controllers.auth import RegisterController, LoginController, NameAvailabilityController, \
    EmailAvailabilityController
from controllers.home import HomeController
from controllers.jwt import TokenRefresh
from controllers.user import UserController
from controllers.publicMessage import PublicMessageController


def load_routes(api):
    api.add_resource(HomeController, "/")
    api.add_resource(RegisterController, "/auth/register")
    api.add_resource(LoginController, "/auth/login")
    api.add_resource(UserController, "/user")
    api.add_resource(NameAvailabilityController, "/auth/check_name/<string:name>")
    api.add_resource(EmailAvailabilityController, "/auth/check_email/<string:email>")
    api.add_resource(TokenRefresh, "/refresh_token")
    api.add_resource(PublicMessageController, "/public_messages")
