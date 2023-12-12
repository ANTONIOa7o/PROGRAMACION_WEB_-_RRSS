//1º Declaro variables
var contador=0;
var incrementar = 0;

/* A] Buscamos el incremento VARIABLES  FUNCIONALES */

function incrementarClick() {
    incrementar = (++contador);
    document.getElementById('resultado').innerHTML= (contador);
    
}

function borrarClick() {
    contador = 0;
    document.getElementById('resultado').innerHTML= (contador);
    
}
/* B] Buscamos el incremento FUNCIONES RECURRENTES*/
function incrementarClick2() {
           sumaClick(++contador)    
}
function sumaClick(contador) {
    document.getElementById('resulta2').innerHTML=(contador);
}
function borrarClick2() {
    contador = 0;
    sumaClick(contador);
}