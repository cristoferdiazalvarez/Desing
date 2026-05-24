const ciudadesFuturistas = ["Night City", "Coruscant", "Neo-Tokyo", "Zion", "Metropolis"];

const contenedorDestino = document.querySelector('[data-function="printHere"]');

const listaUl = document.createElement('ul');

ciudadesFuturistas.forEach(function(ciudad) {
    const listaLi = document.createElement('li');
    listaLi.textContent = ciudad;
    listaUl.appendChild(listaLi);
});

contenedorDestino.appendChild(listaUl);