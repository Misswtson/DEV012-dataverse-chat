import { header } from "../components/header.js";
import { navigateTo } from "../router.js";
import { footer } from "../components/footer.js";
import { homeBtn } from "../components/homeButton.js";
import { getOpenIAapi } from "../lib/openAIKey.js";


export const apiKeyPage = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(homeBtn());
  section.appendChild(apiKeyView());
  section.appendChild(footer());

const homeButton = section.querySelector(".homeButton");
homeButton.addEventListener("click",() => navigateTo("/"));

return section;
};

export const apiKeyView = () => {
  const apiViewHTML = `<h2>API KEY</h2> 
  <p class="apiText">¡Para interactuar con las péliculas, es necesario que ingreses tu APIKEY!</p>
  <input id="apiKeyInput"
  type="text"
  placeholder="INGRESA TU API KEY..."/>
  <button id="clearApiButton">Limpiar</button>
  <button id="saveApiButton">Guardar</button>`; //template string
  const nodoApiView = document.createElement("body"); //Nodo
  nodoApiView.innerHTML = apiViewHTML;
  nodoApiView.classList.add("apiBody");

  return nodoApiView;
};

