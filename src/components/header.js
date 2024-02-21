
// RENDER HEADER COMPONENT
export const header = () => {
  const htmlHeader = `<img id="logo" src="./media/logokaonashi.png" alt="Logo Kaonashi Movies"/> 
    <h1>Kaonashi Movies</h1>`; //Creates a template string
  const nodoHeader = document.createElement("header"); //Creates a Nodo
  nodoHeader.innerHTML = htmlHeader;
  nodoHeader.classList.add("headerComponent");

  return nodoHeader;
};
