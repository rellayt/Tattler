import Home from '../views/Home';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import Profile from '../views/Profile';
import Channels from '../views/Channels';
import Messages from '../views/Messages';
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
    path: '/messages/:roomId',
    component: Messages,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
  {
    path: '/messages',
    component: Messages,
    privateBeforeAuth: true,
    privateAfterAuth: false,
  },
];

export default routes;
