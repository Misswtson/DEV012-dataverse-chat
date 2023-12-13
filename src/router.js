/* En este archivo vas a manejar el enrutamiento de tu aplicación. Es un archivo que
 debes crearlo por tu cuenta. */

// hace referencia al objeto que mapea las ROUTES del sitio.
let ROUTES = {};

// Hace referencia al elemento html en donde se dibujan los componentes.
let rootElement = '';

export const setRootElement = (newElementValue) => {
  // Validar si el newElementValue es un objeto HTML.
  rootElement = newElementValue;
};

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  if (typeof newRoutesValue === 'object') {
    if (newRoutesValue['/errorPage']) {
      ROUTES = newRoutesValue;
    }
  }
  Object.assign(ROUTES, newRoutesValue);
};

const renderView = (pathname, properties = {}) => {
  // clear the root element
  rootElement.innerHTML = ''; // to Clear the element
  // find the correct view in ROUTES for the pathname
  const route = ROUTES[pathname];

  if (route) {
    rootElement.appendChild(route());
  } else {
    const error = document.createElement('div');
    error.textContent = 'Error 404 tu pagina no existe';
    rootElement.appendChild(error);
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

// export const navigateTo = (pathname, properties = {}) => {
//   const URLvisited = pathname;
//   history.pushState({}, "", URLvisited);
//   renderView(pathname, properties);
// }
export const navigateTo = (pathname, properties = {}) => {
  const URLvisited = window.location.hostname + pathname;
  window.history.pushState({}, '', URLvisited);
  renderView(pathname, properties);
};

export const onURLChange = (location) => {
  renderView(location);
};
