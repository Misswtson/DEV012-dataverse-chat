import { navigateTo } from "../router.js";

export const cards= (data) => { //el ciclo es independiente del html 
    const nodoCards = document.createElement("ul"); // Crea el Nodo 
    nodoCards.setAttribute('id','allCards') // crea un nodo nuevo con atributo - id 
    data.forEach((item) => {
      const liItem = document.createElement('li');
      liItem.setAttribute('itemscope', '');
      liItem.setAttribute('itemtype', 'PeliculasAnimacionJaponesa');
      liItem.setAttribute('data-id', 'PeliculasAnimacionJaponesa');
      liItem.setAttribute('data-id', item.id);
      liItem.classList.add('itemContainer');
      liItem.innerHTML = 
      `
                  <dl itemscope itemtype="PeliculasAnimacionJaponesa">
                  <img class="movieImg"src="${item.imageUrl}" alt="${item.name}"/>
                  <div class="texto">
                  <dt></dt><dd itemprop="studio">${item.facts.studio}</dd>
                  <dt></dt><dd itemprop="name">${item.name}</dd>
                  <dt></dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
                  <dt></dt><dd itemprop="genre">${item.facts.genre}</dd>
                  <dt></dt><dd itemprop="year">${item.facts.year}</dd>
                  </div>
                </dl>
      `;

      liItem.addEventListener('click', function(e){
        e.preventDefault();
        const savedApi = localStorage.getItem("apiKey");
        if (savedApi === null) {
        navigateTo("/password");
        }else {
        navigateTo(`/details`, item);
        }
      })
      nodoCards.appendChild(liItem);
    }); 
    nodoCards.classList.add("cardsContainer");
    return nodoCards;
  };

