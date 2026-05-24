const boton = document.querySelector(".clickme");
console.log("1.1 boton encontrado:", boton);

const titulo = document.querySelector("#localizado");
console.log("1.2 titulo encontrado:", titulo);

const todosLosParrafos = document.querySelectorAll("p");
console.log("1.3 Todos los parrafos (Vengadores):", todosLosParrafos);

const todasLascasas = document.querySelectorAll(".hogwarts");
console.log("1.4 Elementos con clase .Hogwarts:", todasLascasas);

const todosLosPersonajes = document.querySelectorAll("[data-universe='starWars']");
console.log("1.5 Elementos con atributo data-universe:", todosLosPersonajes);

const tercerPersonaje = todosLosPersonajes[2];
console.log("1.6 El tercer personaje es:", tercerPersonaje);

