// file main.js finished
import home from './views/home';
import login from './views/login';
import error from './views/error';
// eslint-disable-next-line import/no-unresolved
import signUp from './views/signUp';
import feed from './views/feed';
import resetPassword from './views/resetPassword';
import recipes from './views/recipes';
import workout from './views/workout';
import profile from './views/profile';
import { validateUserSession } from './lib/auth';
import navigationBar from './views/navigationBar';

/* -------------Navegación----------------------------------------*/

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/signUp', component: signUp },
  { path: '/feed', component: feed },
  { path: '/resetPassword', component: resetPassword },
  { path: '/recipes', component: recipes },
  { path: '/workout', component: workout },
  { path: '/profile', component: profile },
  { path: '/navigationBar', component: navigationBar },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

// Observador de la sesion del usuario
validateUserSession(navigateTo);
