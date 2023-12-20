/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import {
  searchByName,
  filterByGenre,
  filterByStudio,
  filterByYear,
  sortData,
  totalMetrics,
  computeStats,
} from '../lib/dataFunctions.js';
import { header } from '../components/header.js';
import { navBar } from '../components/nav.js';
import { renderData } from '../components/cards.js';
import { footer } from '../components/footer.js';
import data from '../data/dataset.js';
import { navigateTo } from '../router.js';

const createChatMessage = () => {
  const section = `<p class="chatMss">!Kaonashi Movies, te permite interactuar con las pelis al hacer click en ellas!</p>
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
  section.appendChild(renderData(data));
  section.appendChild(footer());

  let cumulativeFilter = data;
  const computeStatsContainer = section.querySelector('.computeStats');

  // Movie Search Filter
  const searchInput = section.querySelector('#inputFilter');
  const noResultsFoundContainer = section.querySelector('#noResultsFound');
  searchInput.addEventListener('input', () => {
    const inputSearchValue = searchInput.value.toLowerCase();
    const filteredDataByName = searchByName(data, 'input', inputSearchValue);
    if (inputSearchValue === '') {
      noResultsFoundContainer.textContent = '';
    } else if (filteredDataByName.length === 0) {
      noResultsFoundContainer.textContent = 'Lo sentimos, no se encontraron resultados que coincidan con la búsqueda.';
    }
    allCards.innerHTML = '';
    allCards.appendChild(renderData(filteredDataByName));
    computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(
      filteredDataByName,
    )}`;
    genre.value = '';
    studio.value = '';
    year.value = '';
  });

//Genre filter
const genre = section.querySelector("#genre");
const allCards = section.querySelector("#allCards");
genre.addEventListener("change", (e) => {
  const genreSelected = e.target.value;
  cumulativeFilter = filterByGenre(data, "genre", genreSelected);
  allCards.innerHTML=''
  allCards.appendChild(renderData(cumulativeFilter));
  computeStatsContainer.textContent  = "Total de películas: " + computeStats(cumulativeFilter);
  studio.value = "";
  year.value = "";
  console.log(genre);
});

  // Studio filter
  const studio = section.querySelector('#studio');
  studio.addEventListener('change', (e) => {
    const studioSelected = e.target.value;
    cumulativeFilter = filterByStudio(data, 'studio', studioSelected);
    allCards.innerHTML = '';
    allCards.appendChild(renderData(cumulativeFilter));
    computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(cumulativeFilter)}`;
    genre.value = '';
    year.value = '';
  });

  // Filtro por año
  const year = section.querySelector('#year');
  year.addEventListener('change', (e) => {
    const yearSelected = e.target.value;
    cumulativeFilter = filterByYear(data, 'year', yearSelected);
    allCards.innerHTML = '';
    allCards.appendChild(renderData(cumulativeFilter));
    computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(cumulativeFilter)}`;
    genre.value = '';
    studio.value = '';
  });

  // Ordenamiento ascendente y descendente
  const order = section.querySelector('#orden-alfabetico');
  order.addEventListener('change', (e) => {
    const selectedOrder = e.target.value;
    cumulativeFilter = sortData(cumulativeFilter, 'name', selectedOrder);
    allCards.innerHTML = '';
    allCards.appendChild(renderData(cumulativeFilter));
    computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(cumulativeFilter)}`;
  });

  // Restablece los valores de los selectores, el campo de búsqueda y los contenedores relacionados con la búsqueda

  const clearButton = section.querySelector('#button');
  clearButton.addEventListener('click', () => {
    const filterSelectors = section.querySelectorAll('select');
    const searchInputField = section.querySelector('[name="searchButton"]');
    filterSelectors.forEach((selector) => {
      selector.value = selector.options[0].value;
      searchInputField.value = '';
      noResultsFoundContainer.innerHTML = '';
      cumulativeFilter = data;
      allCards.innerHTML = '';
      allCards.appendChild(renderData(cumulativeFilter));
      computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(cumulativeFilter)}`;
    });
  });

  // Estadística: Dinámicamente modifica el contenido HTML de un elemento computeStatsContainer para mostrar el número total de películas calculado por la función computeStats
  computeStatsContainer.textContent = `Resultados encontrados: ${computeStats(cumulativeFilter)}`;

  // Estadística: Estudio con mayor cantidad de películas y el género que sobresale notablemente
  const metricsContainer = section.querySelector('.metrics');
  const totalMetricsElement = document.createElement('p');
  totalMetricsElement.textContent = totalMetrics(data);
  metricsContainer.appendChild(totalMetricsElement);



const chatButton = section.querySelector("#chat");
const apiKeyButton = section.querySelector("#apiKey");
chatButton.addEventListener("click", () => navigateTo("/panel"));
apiKeyButton.addEventListener("click", () => navigateTo("/password"));


  return section;
};
