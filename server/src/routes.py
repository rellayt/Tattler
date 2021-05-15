from src.controllers.auth import RegisterController, LoginController, NameAvailabilityController, \
	EmailAvailabilityController, AuthenticatorController, LogoutController
from src.controllers.home import HomeController
from src.controllers.image import ImageController
from src.controllers.jwt import TokenRefresh
from src.controllers.media import MediaController
from src.controllers.room import RoomController
from src.controllers.user import UserController
from src.controllers.userSearch import UserSearchController


def load_routes(api):
	api.add_resource(HomeController, "/")
	api.add_resource(TokenRefresh, "/auth/refresh_token")
	api.add_resource(LogoutController, "/auth/logout")
	api.add_resource(AuthenticatorController, "/auth/me")
	api.add_resource(RegisterController, "/auth/register")
	api.add_resource(LoginController, "/auth/login")
	api.add_resource(NameAvailabilityController, "/auth/check_name/<string:name>")
	api.add_resource(EmailAvailabilityController, "/auth/check_email/<string:email>")
	api.add_resource(UserSearchController, "/user_search")
	api.add_resource(UserController, "/user")
	api.add_resource(RoomController, "/room")
	api.add_resource(ImageController, "/image")
	api.add_resource(MediaController, "/media/<string:id>")
