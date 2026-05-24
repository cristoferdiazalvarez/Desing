const titulo = document.getElementById('titulo-principal');
const boton = document.getElementById('mi-boton');

titulo.textContent = '¡Hola, Mundo!';

boton.addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
});

