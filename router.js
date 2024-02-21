//En este archivo vas a manejar el enrutamiento de la aplicación
// hace referencia al objeto que mapea las ROUTES del sitio.
// Hace referencia al elemento html en donde se dibujan los componentes.
// Validar si el newElementValue es un objeto HTML.
// optional Throw errors if routes isn't an object
// optional Throw errors if routes doesn't define an /error route
// assign ROUTES
// clear the root element
// to Clear the element
// find the correct view in ROUTES for the pathname
// in case not found render the error view
// render the correct view passing the value of props
// add the view element to the DOM root element
//Crea transiciones de página sin realizar solicitudes al servidor para cargar nuevas páginas completas.
// update window history with pushState
// render the view with the pathname and props

let ROUTES = {};

let rootElement = "";

export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};

export const setRoutes = (newRoutesValue) => {
  ROUTES = newRoutesValue;
};

const renderView = (pathname, properties = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](properties);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES[`/error`](properties));
  }
};

export const navigateTo = (pathname, properties = {}) => {
  const URLVisited = window.location.origin + pathname;
  history.pushState({}, "", URLVisited);

  renderView(pathname, properties);
};

export const onURLChange = () => {
  const pathname = window.location.pathname;
  renderView(pathname);
};
window.onpopstate = onURLChange;
