//declaracion de variables


var estiloDilexia = false;
/* para este estilo buscamos redondear, bordear las estructuras*/

var estiloDaltonico = false;
/* para este estilo trabajaremos los colores, es decir,
 colores invertimos del un solido a un gris */

var estiloEpilepsia = false;
/* podemos trabajar difuminando una sombra */

function dilexia() {

    if (estiloDilexia == false) {
        /* creamos otra propiedad muy util, que 
        ayuda a trabajar no dentro del html,
        sino desde css.*/
        document.getElementById('resultado').style.border='3px solid black';
    } else {
        document.getElementById('resultado').style.border=''
    }
}
function altonico() {
    if (estiloDaltonico == false) {

    } else {

    }
}
function epilepsia() {
    if (estiloEpilepsia == false) {

    } else {

    }
}