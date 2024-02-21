
export const footer = () => {
    const htmlFooter = `<p>Todos los derechos reservados 2024</p>`; //template string
    const nodoFooter = document.createElement("footer");//Nodo 
    nodoFooter.innerHTML = htmlFooter;
    nodoFooter.classList.add("footer");

    return nodoFooter;
}