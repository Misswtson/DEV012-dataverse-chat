/* En este archivo vas a manejar el enrutamiento de tu aplicación */

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
    const root = rootElement;
    root.innerHTML = ''; // to Clear the element
    // find the correct view in ROUTES for the pathname
if (ROUTES[pathname]){
   const template = ROUTES[pathname](properties);
   root.appendChild(template);
} else {
    root.appendChild(ROUTES["/errorPage"](properties));
}
    // in case not found render the error view
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
  //Crea transiciones de página sin realizar solicitudes al servidor para cargar nuevas páginas completas.
  export const navigateTo = (pathname, properties = {}) => {
    // update window history with pushState
    const URLvisited = window.location.origin + pathname; // our Hostname would be localhost:3000
    history.pushState({}, "", URLvisited); 
    // render the view with the pathname and props
    renderView(pathname, properties);
  }
  
  export const onURLChange = (location) => {
    renderView(location);
  }
