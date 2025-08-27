//Layouts
import { AuthLayout, DefaultLayout } from '~/layouts';
//Pages
import Detail from '~/pages/Detail';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
//public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: AuthLayout },
];
//private routes
const privateRoutes = [{ path: '/c', component: Detail, Layout: DefaultLayout }];
export { publicRoutes, privateRoutes };
