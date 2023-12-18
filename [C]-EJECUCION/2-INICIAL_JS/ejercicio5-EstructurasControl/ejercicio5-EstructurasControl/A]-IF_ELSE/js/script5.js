/* 
Analisis del calculo:

Crédito interés simple o directo
Condiciones:
Tramos de capital y de interes y tiemp
- hasta 24 meses tipo de interes de 6%
-hasta 60 meses tipo de interés del 9%
-a partir de 60 meses interes del 12%

CREDITO*REDITO*TIEMPO
*/

function calcular() {
    //1º Recoger una variable principales
    var capital = parseFloat(prompt('¿Introduce lo que cuesta tu sueño? 💭'));
    var tiempo = parseInt(prompt('¿Meses para pagar comodamente?'));
    //2º variables secundarias
    var interes = 0;
    var cuota = 0;
    var pagoInteres = 0;

    //3º Conjugar las variables con las condiciones planteadas,  para ello
    // el if else  es ideal

    if (tiempo <= 24) {
        interes = 1.06
    } else if (tiempo <= 60) {
        interes = 1.09
    } else {
        interes = 1.12
    }

    pagoInteres = (capital * interes * (tiempo / 12));

    cuota = (capital + pagoInteres) / tiempo;

    //4º Mostrar el resultado de las variables
    document.getElementById('resultado').innerHTML =
        'Credito solicitado: ' + capital + '€' + '<br>' +
        'Tipo de interes: ' + ((interes - 1) * 100).toFixed(2) + '%' + '<br>' +
        'Tiempo a Pagar: ' + tiempo + ' meses' + '<br>' +
        'Total de interes a pagar:  ' + pagoInteres + '€' + '<br>';

    document.getElementById('resulta2').innerHTML =
        'Total de couta a pagar al mes: ' + cuota.toFixed(2) + '€' + '<br>';
        /* Aparece un nueva propiedad, para ajustar los decimales de operaciones
        algebraicas.
         */
}

function descargar() {
    window.print()
}
/* Una vez mas las configuraciones de window, las intentamos aprovechar con imprimir pantalla con la propiedad print() */