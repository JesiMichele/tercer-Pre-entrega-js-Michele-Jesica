const personajes=document.getElementById("personajes");
const nombreFiltro=document.getElementById("nombreFiltros");
const estadoPers=document.getElementById("form-select");
//traer personajes de la API, solicitando nombre y estado
async function buscarPersonajes(name, status){
    let URL="https://rickandmortyapi.com/api/character/";
   
    if (name || status) {
        URL += "?";
        if (name) {
          URL += `name=${name}&`;
        }
     
    if(status){
        URL += `status=${status}`;
    }
}
    const respuesta=await fetch(URL);
    const data=await respuesta.json();
    return data.results;
}

//filtrado de personajes/Creacion de tarjetitas
async function filtrarPers(name, status){
   personajes.innerHTML = "";
   
    const persFilter=  await buscarPersonajes(name,status);
    for (let personaje of persFilter) {
        const tarjeta= document.createElement("div");
        tarjeta.classList.add("tarjeta-personaje");

        tarjeta.innerHTML= `
        <img src="${personaje.image}" 
        <h2> ${personaje.name}</h2>
        <p> Estado:${personaje.status}</p>
        <p> Especie:${personaje.species}</p>
        `;

        personajes.appendChild(tarjeta);
     
    }
}
filtrarPers();


//filtrado a traves de un buscador
nombreFiltro.addEventListener("input", () => {
    
    filtrarPers(nombreFiltro.value);
    console.log(nombreFiltro.value);
});
estadoPers.addEventListener("change", () => {
    filtrarPers(estadoPers.value);
    console.log(estadoPers.value);
});



//Logre que el filtrado funcione por nombre, no asi para el estado, no se si es una falta de interpretacion mia de la API o un error en mi codigo.












