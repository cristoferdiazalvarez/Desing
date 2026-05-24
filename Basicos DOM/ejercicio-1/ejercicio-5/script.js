const peliculas = [
    "Interstellar",
    "Blade Runner",
    "Matrix",
    "Inception",
    "Jurassic Park"
];

const listaUl = document.createElement('ul');
peliculas.forEach(function(pelicula) {
    const elementoLi = document.createElement('li');
    elementoLi.textContent = pelicula;     
    listaUl.appendChild(elementoLi);
});

document.body.appendChild(listaUl);