import { footer } from "../components/footer.js";
import { navigateTo } from "../router.js";
import { header } from "../components/header.js";

// CREATES THE HTML CONTENT
export const password = () => {
  const passwordView = () => {
    const apiView = `<h2>¡Bienvenid@!</h2> 
    <p class="apiText">Para acceder al chat con cada una de las películas, se deberá ingresar una Api Key, la cúal podrás encontrar en el sitio web de Openai.com</p>
    <input class="apiKeyInput"
    type="password"
    placeholder="Ingresar API KEY..."/>
    <button id="clearApiButton">Limpiar</button>
    <button id="saveApiButton">Guardar</button>`;

    const nodoApiView = document.createElement("section");
    nodoApiView.innerHTML = apiView;
    nodoApiView.classList.add("apiSection");

    return nodoApiView;
  };

  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(passwordView());
  section.appendChild(footer());

  const input = section.querySelector(".apiKeyInput");

  const apiKeySaveBtn = section.querySelector("#saveApiButton");

  apiKeySaveBtn.addEventListener("click", () => {
    localStorage.setItem("apiKey", input.value);
    if(input.value === "" ) {
      alert("Ingrese su API key")
    } else {
        navigateTo("/");
      }
    });

    const apiKeyClearBtn = section.querySelector("#clearApiButton");
    apiKeyClearBtn.addEventListener("click", () => {
      localStorage.removeItem("apiKey");
      input.value = "";
      console.log(apiKeyClearBtn);

      
    });
  
    return section;

  };

