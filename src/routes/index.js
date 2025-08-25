//Layouts
import { AuthLayout, DefaultLayout } from '~/layouts';
//Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';

//public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: AuthLayout },
];
//private routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
