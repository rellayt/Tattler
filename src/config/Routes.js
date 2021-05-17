import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';
import Profile from '../views/Profile';
import Channels from '../views/Channels';
import Chats from '../views/Chats';
import SelectedProfile from '../views/SelectedProfile';

const routes = [
  {
    path: '/home',
    component: Home,
    privateBeforeAuth: false,
    privateAfterAuth: false,
  },
  {
    path: '/login',
    component: Login,
    privateBeforeAuth: false,
    privateAfterAuth: true,
  },
  {
    path: '/register',
    component: Register,
    privateBeforeAuth: false,
    privateAfterAuth: true,
  },
  {
    path: '/channel/:id',
    component: Channels,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/profile/:id',
    component: SelectedProfile,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/profile',
    component: Profile,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/chats/r/:roomId',
    component: Chats,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/chats/new',
    component: Chats,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/chats',
    component: Chats,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
];

export default routes;
