// Este archivo define las Routes e importa los componentes que se van a renderizar.
import { setRoutes, setRootElement, onURLChange } from './router.js';
import { home } from './views/home.js';
import { errorPage } from './views/errorPage.js';
import { password } from './views/password.js';
import { details } from './views/details.js';
import { panel } from './views/panel.js';

// Define the routes and their associated views
const routes = {
  '/': home,
  '/errorPage': errorPage,
  '/password': password,
  '/details': details,
  '/panel': panel,
};
// itera sobre el dataset y se le da clave dinamica al objeto routes

// Assign the routes
const viewContainer = document.getElementById('root');
setRoutes(routes);
setRootElement(viewContainer);


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Fully Loaded and Parsed");
  onURLChange(event.target.location.pathname);
});

window.onpopstate = onURLChange;
