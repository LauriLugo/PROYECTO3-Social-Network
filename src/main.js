import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';
import { Profile } from './components/Profile.js';

const rootDiv = document.getElementById('root'); // busca información desde el html a travez del "document" utilizando el metodo getElementById.

const routes = {
  404: './404.html',
  '/': Login,
  '/register': Register,
  '/wall': Wall,
  '/profile': Profile,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname, // Recibe tambien el titulo de la pagina
    window.location.origin + pathname, // Finalmente recibe la url de la pagina.
  );

  if (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component(onNavigate));

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};
