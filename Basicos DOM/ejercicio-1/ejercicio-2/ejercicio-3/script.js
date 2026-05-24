const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

const divConParrafo = document.createElement("div");
const parrafoInterno = document.createElement("p");
parrafoInterno.textContent = "Este  párrafo vive dentro de un  div.";
divConParrafo.appendChild(parrafoInterno);
document.body.appendChild(divConParrafo);

const divConSeisParrafos = document.createElement("div");
for (let i = 1; i <= 6; i++) {
    const pBucle = document.createElement("p");
    pBucle.textContent = `párrafo numero ${i} creado en el bucle.`;
    divConSeisParrafos.appendChild(pBucle);
}
document.body.appendChild(divConSeisParrafos);

const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy totalmente dinamico.";
document.body.appendChild(pDinamico);

const h2Sestino = document.querySelector("h2.fn-insert-here");
h2Sestino.textContent = "Que la fuerza te acompañe.";

const videojuegos = ["Zelda", "Super Mario Bros", "Minecraft", "halo", "Call of Duty"];
const listaUl = document.createElement("ul");

videojuegos.forEach(videojuego => {
    const li = document.createElement("li");
    li.textContent = videojuego;
    listaUl.appendChild(ListaLi);
});
document.body.appendChild(listaUl);

const elementoParaEliminar = document.querySelectorAll(".fn-remove-me");
elementoParaEliminar.forEach(elemento => {
    elemento.remove();
});

const divsBloque = document.querySelectorAll("bloque-vacio");
const pIntermedios = document.createElement("p");
pIntermedios.textContent = "¡He conseguido ponerme justo en medio!";

divsBloque[0].insertAdjacentElement("afterend", pIntermedios);

const divsInsertarAqui = document.querySelectorAll("div.fn-insert-here");

divsInsertarAqui.forEach(div => {
    const pInterno = document.createElement("p");
    pInterno.textContent = "¡He entrado dentro del contenedor!";
    div.appendChild(pInterno);
});
