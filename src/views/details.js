import { header } from "../components/header.js";
import { secondaryNav } from "../components/secondaryNav.js";
import { chatIa } from "../components/chatIa.js";
import { footer } from "../components/footer.js";
import data from '../data/dataset.js';
import { chatCompletions } from "../lib/openAiKey.js";


export const details = (properties) => {
  console.log("---HELLO FROM THE OTHER SIDE-->", properties);
  const section = document.createElement("section");
  section.appendChild(header());
  section.appendChild(secondaryNav());

  // RENDER MOVIE DETAILS

  const containerMovie = document.createElement("section");
  const movieView = ` <section>
  <div class="moviePoster">
  <img class="imgMovie"src="${properties.imageUrl}"/>
  <h3 class="movieTittle">Descripción</h3>
  <p class="description">${properties.description}</p>
  </div>
  </section> `;

  containerMovie.innerHTML = movieView;
  section.appendChild(containerMovie);
  section.appendChild(chatIa());
  section.appendChild(footer());

  // RENDER USER ELEMENTS

  //IMG
  const renderImg = section.querySelector(".user");
  const movieUserImg = document.createElement("img");
  movieUserImg.src = `${properties.imageUrl}`;
  movieUserImg.classList.add("imgUser");
  renderImg.appendChild(movieUserImg);

  // NAME
  const renderName = section.querySelector(".user");
  const movieUserName = document.createElement("h4");
  movieUserName.innerHTML = `${properties.name}`;
  movieUserName.style.color = "#ec004a";
  movieUserName.classList.add("userName");
  renderName.appendChild(movieUserName);

  // SENDBUTTON (DOM)

  const userText = section.querySelector("#userText");
  const chatSection = section.querySelector(".chats");
  const sendButton = section.querySelector(".sendButton");

  sendButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (userText.value) {
      console.log(userText.value);

      const showUserText = document.createElement("p");
      showUserText.innerHTML= userText.value;
      showUserText.classList.add("messagesU");
      chatSection.appendChild(showUserText);
    
      const clearTextarea = section.querySelector("input");
      clearTextarea.value = "";
    }
    // API RESPONSE

    const personaje = data.map(properties => properties.name);
    chatCompletions(localStorage.getItem("apiKey"), {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres ${personaje} el protagonista de la película, presentate y responde a todas las preguntas sobre tu vida`,
        },
        {
          role: "user",
          content: userText.value,
        },
      ],
    })
      .then((response) => {
        return response.json();
      })
        .then((data) => {
          console.log(data);
          console.log(data.choices);
          const apiAnswer = document.createElement("p");
          apiAnswer.textContent = data.choices[0].message.content;
          apiAnswer.classList.add("messagesApi");
          apiAnswer.style.color = "black";
          chatSection.appendChild(apiAnswer);
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
          alert("Hubo un error al comunicarse con la API.");
        })
    });
  
    return section;
};
 
  

