//Crear un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada.

var  colorSeleccionado = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
       colorSeleccionado = 'blue';
    } else if (event.key === 's') {
        colorSeleccionado = 'green';
    } else if (event.key === 'd') {
        colorSeleccionado = 'red';
    } else if (event.key === 'f') {
        colorSeleccionado = 'yellow';
    } else{
        colorSeleccionado = 'otro boton';
    }

    console.log(colorSeleccionado);
}) 