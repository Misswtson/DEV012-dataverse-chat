
const createErrorMessage = () => {
  const errorMessageHTML = `<h2 class="errorMessage">¡Ups! Page Not Found!</h2>
  <img class="errorImg" src="./media/error-img.png"/>
  `; // template string
  const nodoErrorElement = document.createElement('section'); // crea el nodo
  nodoErrorElement.innerHTML = errorMessageHTML;
  nodoErrorElement.classList.add('section');

  return nodoErrorElement;
};

export const errorPage = () => {
  const section = document.createElement('section');
  section.appendChild(createErrorMessage());
  return section;
};
