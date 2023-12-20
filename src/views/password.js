import { header } from '../components/header.js';
import { secondaryNav } from '../components/secondaryNav.js';
import { footer } from '../components/footer.js';
// import { chatCompletions } from '../lib/openAiKey.js';
import { navigateTo } from '../router.js';

export const apiKeyView = () => {
  const apiViewHTML = `<h2>API KEY</h2> 
  <p class="apiText">¡Para interactuar con las péliculas, es necesario que ingreses tu API KEY!</p>
  <input class="apiKeyInput"
  type="password"
  placeholder="Ingresa tu API Key.."/></br>
  <button id="clearApiButton">Limpiar</button>
  <button id="saveApiButton">Guardar</button>`; // template string
  const nodoApiView = document.createElement('section'); // Nodo
  nodoApiView.innerHTML = apiViewHTML;
  nodoApiView.classList.add('apiBody');

  return nodoApiView;
};

export const password = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(apiKeyView());
  section.appendChild(footer());

  const homeButton = section.querySelector('.secondaryNav');
  homeButton.addEventListener('click', () => navigateTo('/'));

  return section;
};
