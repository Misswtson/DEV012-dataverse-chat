import { header } from "../components/header.js";
import { secondaryNav } from "../components/secondaryNav.js";
import { chatIA } from "../components/chatIA.js";
import { footer } from "../components/footer.js";
import { chatCompletions } from "../lib/openAIKey.js";
import { navigateTo } from "../router.js";
import dataset from "../data/dataset.js";

const createDetailsMessage = () => {
  const detailsMessageHTML = `<h3>Conoce más acerca de esta película y sumérgete en detalles 
  fascinantes a través de nuestro amigable chat.</h3>`; // template string
  const nodoDetailsElement = document.createElement("h3"); // Nodo
  nodoDetailsElement.innerHTML = detailsMessageHTML;
  nodoDetailsElement.classList.add("detailsHeading");

  return nodoDetailsElement;
};
export const details = () => {
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(secondaryNav());
  section.appendChild(createDetailsMessage());
  section.appendChild(chatIA());
  section.appendChild(footer());

  const homeButton = section.querySelector(".secondaryNav");
  homeButton.addEventListener("click", () => navigateTo("/"));

  chatCompletions(localStorage.getItem("apiKey"), {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Responde a mis preguntas como si fueras un personaje aleatorio de la película Akira, inicia tu respuesta presentandote. Responde todas las preguntas relacionadas con la película",
      },
      {
        role: "user",
        content: "Hola, hablame de Akira"
      },
    ],
  })
    .then((responseOpenIA) => {
      responseOpenIA.json().then((responseJSObject) => {
       console.log(responseJSObject);
       console.log(responseJSObject.choices);
      });
    })
    .catch((error) => {
      alert("Hubo un error al comunicarse con la API.");
    });
console.log(chatCompletions);
  return section;
};



