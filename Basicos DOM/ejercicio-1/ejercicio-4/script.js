const botonDespegue = document.getElementById('btnToClick');

botonDespegue.addEventListener('click', function(event) {
    console.log("--- 1.1 Evento Click Detectado ---");

    console.log(event);
});

const inputCoordenadas = document.querySelector('.input-focus');

inputCoordenadas.addEventListener('focus', function() {
    console.log("--- 1.2 Evento Focus Detectado ---");
    console.log("El valor actual del input es:", inputCoordenadas.value);
});

const inputNombre = document.querySelector('.input-value');

inputNombre.addEventListener('input', function() {
    console.log("--- 1.3 Evento Input en tiempo real ---");
    console.log("Texto que está escribiendo el usuario:", inputNombre.value);
});