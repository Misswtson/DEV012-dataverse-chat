import { navigateTo } from "../router.js";

export const renderData = (data) => { //el ciclo es independiente del html 
    let htmlCards = "";
    const nodoCards = document.createElement("ul"); // Crea el Nodo 
    nodoCards.setAttribute('id','allCards') // crea un nodo nuevo con atributo - id 
    data.forEach((items) => {
    htmlCards += `<li itemscope itemtype="PeliculasAnimacionJaponesa" class="itemContainer" data-id="${items.id}">
                  <dl itemscope itemtype="PeliculasAnimacionJaponesa">
                  <img src="${items.imageUrl}" alt="${items.name}"/>
                  <div class="texto">
                  <dt></dt><dd itemprop="studio">${items.facts.studio}</dd>
                  <dt></dt><dd itemprop="name">${items.name}</dd>
                  <dt></dt><dd itemprop="shortDescription">${items.shortDescription}</dd>
                  <dt></dt><dd itemprop="genre">${items.facts.genre}</dd>
                  <dt></dt><dd itemprop="year">${items.facts.year}</dd>
                  </div>
                </dl>
              </li>`; //template string
    });
    nodoCards.innerHTML = htmlCards;// Convierte el string en un HTML
    nodoCards.classList.add("cardsContainer");
    
    const savedApi = localStorage.getItem("apiKey");
    nodoCards.addEventListener("click", (e) => {
    e.preventDefault();
    if (savedApi === null) {
    navigateTo("/details");
    }else {
    navigateTo("/pasword", element);
    }
    });

    return nodoCards;
  };

