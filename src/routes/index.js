import config from '~/config';
//Layouts
import { AuthLayout, DefaultLayout } from '~/layouts';
//Pages
import { Login } from '~/pages/Login';
import { Signup } from '~/pages/Signup';
import Home from '~/pages/Home';
import { Profile } from '~/pages/Profile';

//public routes
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: AuthLayout },
  { path: config.routes.login, component: Login, layout: AuthLayout },
  { path: config.routes.signup, component: Signup, layout: AuthLayout },
];
//private routes
const privateRoutes = [{ path: config.routes.profile, component: Profile, Layout: DefaultLayout }];
export { publicRoutes, privateRoutes };
