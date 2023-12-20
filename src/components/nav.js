export const navBar = () => {
    const htmlNav = `<nav>
    <input
      type="search"
      id="inputFilter"
      placeholder="Search"
      <img id="input-Icon" src="./media/iconoLupa.png">
    <label for="genre"></label>
    <select id="genre" data-testid="select-filter" name="genre">
      <option disabled selected value="">Genero</option>
      <option value="Acción">Acción</option>
      <option value="Aventura">Aventura</option>
      <option value="Bélico">Bélico</option>
      <option value="Ciencia Ficción">Ciencia Ficción</option>
      <option value="Deportes">Deportes</option>
      <option value="Drama">Drama</option>
      <option value="Fantasía">Fantasía</option>
      <option value="Mecha">Mecha</option>
      <option value="Psicológico">Psicológico</option>
      <option value="Romance">Romance</option>
      <option value="Thriller">Thriller</option>
    </select>
    <label for="studio"></label>
    <select id="studio" data-testid="select-studio" name="studio">
      <option disabled selected value="">Estudio</option>
      <option value="CoMix Wave Films">CoMix Wave Films</option>
      <option value="Gainax">Gainax</option>
      <option value="Kyoto Animation">Kyoto Animation</option>
      <option value="Madhouse">Madhouse</option>
      <option value="Production I.G">Production I.G</option>
      <option value="Studio Ghibli">Studio Ghibli</option>
      <option value="Sunrise">Sunrise</option>
      <option value="TMS Entertainment">TMS Entertainment</option>
      <option value="Toei Animation">Toei Animation</option>
      <option value="Ufotable">Ufotable</option>
      <option value="Why Not Productions">Why Not Productions</option>
      <option value="Wild Bunch">Wild Bunch</option>
    </select>
    <label for="year"></label>
    <select id="year" data-testid="select-año" name="year">
      <option disabled selected value="">Año de estreno</option>
      <option value="1988">1988</option>
      <option value="1989">1989</option>
      <option value="1992">1992</option>
      <option value="1993">1993</option>
      <option value="1995">1995</option>
      <option value="1997">1997</option>
      <option value="2001">2001</option>
      <option value="2003">2003</option>
      <option value="2004">2004</option>
      <option value="2006">2006</option>
      <option value="2013">2013</option>
      <option value="2016">2016</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2022">2022</option>
    </select>
    <label for="orden-alfabetico"></label>
    <select id="orden-alfabetico" data-testid="select-sort" name="name">
      <option disabled selected value="">Ordenar</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
    <button id="button" data-testid="button-clear">Limpiar</button>
    <button id="chat" data-testid="panel-chat">Chat</button>
    <button id="apiKey" data-testid="api-key">Api Key</button>
  </nav> 
  <div class="metrics"> </div>
  <div id="noResultsFound"></div>`; //Creates a template string
  const nodoNavB = document.createElement("nav"); // Creates a Nodo
  nodoNavB.innerHTML = htmlNav;
  nodoNavB.classList.add("navComponent");
  return nodoNavB;
};
