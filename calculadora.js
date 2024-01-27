let arrastrando = false;
let ejeX, ejeY;
let anchoMax = window.innerWidth;
let altoMax = window.innerHeight;
let contenedorCalc = document.getElementById('contenedorCalc');
let cButtons = document.getElementById('c_buttons');
let encimaCButtons = false;

window.addEventListener('resize', () => {
    anchoMax = window.innerWidth;
    altoMax = window.innerHeight;
});

cButtons.addEventListener('mouseenter', () => {
    encimaCButtons = true;
});

cButtons.addEventListener('mouseleave', () => {
    encimaCButtons = false;
});

contenedorCalc.addEventListener('mousedown', (evento) => {
    if (encimaCButtons) {
        arrastrando = true;
        /* RESTAR la posición donde se sujeta el clic
        menos la posicion de la ventana en la esquina superior izq del contenedorCalc
        esto es para saber cual es la posicion de X y de Y para poder determinar la posicion
        real de la ventana de la calculadora*/
        /**DIFERENCIA DESDE EL CURSOR HASTA LA ESQUINA DE LA VENTANA EN X */
        // ejeX = evento.clientX - contenedorCalc.offsetLeft;
        ejeX = evento.clientX - contenedorCalc.getBoundingClientRect().left;

        /**DIFERENCIA DESDE EL CURSOR HASTA LA ESQUINA DE LA VENTANA EN Y */
        // ejeY = evento.clientY - contenedorCalc.offsetTop;
        ejeY = evento.clientY - contenedorCalc.getBoundingClientRect().top;

    }
});

document.addEventListener('mouseup', function () {
    arrastrando = false;
});

document.addEventListener('mousemove', (evento) => {
    if (arrastrando) {
        let posiVentanaX = evento.clientX - ejeX;
        let posiVentanaY = evento.clientY - ejeY;

        if (posiVentanaX >= 0 && posiVentanaX < anchoMax - contenedorCalc.offsetWidth) {
            contenedorCalc.style.left = evento.clientX - ejeX + 'px';
        }
        if (posiVentanaY >= 0 && posiVentanaY < altoMax - contenedorCalc.offsetHeight) {
            contenedorCalc.style.top = evento.clientY - ejeY + 'px';
        }
    }
});
