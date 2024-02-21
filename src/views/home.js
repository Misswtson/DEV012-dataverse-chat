
import {
  searchByName,
  filterByGenre,
  filterByStudio,
  filterByYear,
  sortData,
  computeStats,
} from '../lib/dataFunctions.js';
import { header } from '../components/header.js';
import { navBar } from '../components/nav.js';
import { cards } from '../components/cards.js';
import { footer } from '../components/footer.js';
import data from '../data/dataset.js';
import { navigateTo } from '../router.js';

const createChatMessage = () => {
  const section = `<p class="chatMss">!Kaonashi Movies, te permite interactuar con cada una de las películas, al hacer click en ellas!</p>
  <p class="computeStats"></p>`; // Creates a template string
  const nodoP = document.createElement('section'); // Creates a Nodo
  nodoP.innerHTML = section;
  nodoP.classList.add('sectionComputeStats');

  return nodoP;
};

export const home = () => {
  const section = document.createElement('section');
  section.appendChild(header());
  section.appendChild(navBar());
  section.appendChild(createChatMessage());
  section.appendChild(cards(data));
  section.appendChild(footer());

  let cumulativeFilter = data;
  const computeStatsContainer = section.querySelector('.computeStats');

  // Search movie input
  const searchInput = section.querySelector('#inputFilter');
  const noResultsFoundContainer = section.querySelector('#noResultsFound');
  searchInput.addEventListener('input', () => {
    const inputSearchValue = searchInput.value.toLowerCase();
    const filteredDataByName = searchByName(data, 'input', inputSearchValue);
    if (inputSearchValue === "") {
      noResultsFoundContainer.textContent = "";
    } else if (filteredDataByName.length === 0) {
      noResultsFoundContainer.textContent = 'Lo sentimos, no se encontraron resultados que coincidan con la búsqueda.';
    }
    allCards.innerHTML = "";
    allCards.appendChild(cards(filteredDataByName));
    computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(filteredDataByName,)}`;
    genre.value = "";
    studio.value = "";
    year.value = "";
  });

// filter data by Genre
const genre = section.querySelector("#genre");
const allCards = section.querySelector("#allCards");
genre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  cumulativeFilter = filterByGenre(data, "genre", genreSelected);
  allCards.innerHTML=''
  allCards.appendChild(cards(cumulativeFilter));
  computeStatsContainer.textContent  = "Total de películas: " + computeStats(cumulativeFilter);
  studio.value = "";
  year.value = "";
  console.log(genre);
});

  // filter data by Studio
  const studio = section.querySelector('#studio');
  studio.addEventListener('change', (e) => {
    const studioSelected = e.target.value;
    cumulativeFilter = filterByStudio(data, 'studio', studioSelected);
    allCards.innerHTML = '';
    allCards.appendChild(cards(cumulativeFilter));
    computeStatsContainer.textContent = "Resultados encontrados " + computeStats(cumulativeFilter);
    genre.value = '';
    year.value = '';
  });

  // filter data by year
  const year = section.querySelector('#year');
  year.addEventListener('change', (e) => {
    const yearSelected = e.target.value;
    cumulativeFilter = filterByYear(data, 'year', yearSelected);
    allCards.innerHTML = '';
    allCards.appendChild(cards(cumulativeFilter));
    computeStatsContainer.textContent = "Resultados encontrados " + computeStats(cumulativeFilter);
    genre.value = '';
    studio.value = '';
  });

  // Order data asc and desc
  const order = section.querySelector('#orden-alfabetico');
  order.addEventListener('change', (e) => {
    const selectedOrder = e.target.value;
    cumulativeFilter = sortData(cumulativeFilter, 'name', selectedOrder);
    allCards.innerHTML = '';
    allCards.appendChild(cards(cumulativeFilter));
    computeStatsContainer.textContent = "Resultados encontrados " + computeStats(cumulativeFilter);
  });

// Reset all the values
  const clearButton = section.querySelector('#button');
  clearButton.addEventListener('click', function() {
    const filterSelectors = section.querySelectorAll('select');
    filterSelectors.forEach((selector) => {
      selector.value = selector.options[0].value;
      searchInput.value = "";
      noResultsFoundContainer.innerHTML = "";
      cumulativeFilter = data;
      allCards.innerHTML = "";
      allCards.appendChild(cards(cumulativeFilter));
      computeStatsContainer.textContent = "Resultados encontrados " + computeStats(cumulativeFilter);
    });
  });
// To Render the stadistics in all filters, main and in the search input
  computeStatsContainer.textContent = "Resultados encontrados " + computeStats(cumulativeFilter);

// Call to action buttons

const apiKeyButton = section.querySelector("#apiKey");
apiKeyButton.addEventListener("click", () => navigateTo("/password"));


  return section;
};
