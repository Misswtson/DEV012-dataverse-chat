import { header } from '../components/header.js';
import { secondaryNav } from '../components/secondaryNav.js';
import { footer } from '../components/footer.js';
import { navigateTo } from '../router.js';
import { chatIA } from '../components/chatIA.js';

const createPanelMessage = () => {
  const panelMessageHTML = `<h3> Interactúa con todas nuestras películas a través 
  del chat y descubre historias cautivadoras y momentos inolvidables.</h3>`; // template string
  const nodoPanelElement = document.createElement('h3'); // Nodo
  nodoPanelElement.innerHTML = panelMessageHTML;
  nodoPanelElement.classList.add('panelHeading');

  return nodoPanelElement;
};

export const panel = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(createPanelMessage());
  section.appendChild(chatIA());
  section.appendChild(footer());

  const homeButton = section.querySelector('.secondaryNav');
  homeButton.addEventListener('click', () => navigateTo('/'));

  return section;
};
