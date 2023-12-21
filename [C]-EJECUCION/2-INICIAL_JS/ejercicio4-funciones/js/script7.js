/* 1º Declaramos las variables principal */
var contador = 0;

/* funcion principal */
function incrementarClick() {
sumarClick(++contador);
venta();
}

/* Funciones subordinadas */
function sumarClick(contador) {
    document.getElementById('nºClick').innerHTML=(contador);
}

function venta() {
    var total=0;
    total = (contador*103.80);
    document.getElementById('resultado').innerHTML=
    'Importe a abonar es: ' + total + '€'
    
}

function borrar() {
    contador=0;
    document.getElementById('nºClick').innerHTML=(contador);
    document.getElementById('resultado').innerHTML= 'Importe a abonar es: ' + contador + ' €'
    
}
/* redifusion */
function redifusion() {
    window.open('https://www.wetsuitoutlet.es/','_blank');
  /*   window.open('https://getbootstrap.com/','_top'); */
    window.open('https://www.bet365.es/','_top');
}

