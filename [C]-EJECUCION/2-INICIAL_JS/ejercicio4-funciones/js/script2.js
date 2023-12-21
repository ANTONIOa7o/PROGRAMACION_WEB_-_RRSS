/* variables globales */

var n1;
var n2;
/* parseInt()  parseFloat() 
Con el parseInt, solo hará operaciones con enteros, si queremos
con decimales el  metodo será el parseFloat
*/
n1 = parseInt(prompt('Introduce el 1º número'));
n2 = parseInt(prompt('Introduce el 2º numero'));

function sumar(params) {
    var resultado = n1+n2;
    swal('el resultado de la suma es: ' + resultado );
}
function restar(params) {
    var resultado = n1-n2;
    swal('el resultado de la suma es: ' + resultado );
    
}
function multiplicar(params) {
    var resultado = n1*n2;
    swal('el resultado de la suma es: ' + resultado );
    
}
function dividir(params) {
/*     var resultado = n1/n2; */
    swal('el resultado de la suma es: ' + (n1/n2) );
    
}