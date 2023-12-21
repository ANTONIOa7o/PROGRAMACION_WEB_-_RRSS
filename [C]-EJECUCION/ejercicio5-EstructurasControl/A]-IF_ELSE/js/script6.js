/* Condiciones   las variables y su definicion
1º 
Necesitariamos los  tramos de imc
a)<=18.5 imc Peso inferior a lo normal, acercandonos a la extrema delgadez
b) tramo 24.9 <= Peso ideal o estructura normal, limites de salubridad)
c) 29.9 <=  Peso limite superior a lo  normal, limites de obesidad
d) 30 > Peso limite de disfuncional de obesidad
*/

function calcularImc() {
    //2º Declaracion de variable
    var peso = parseFloat(dataPeso.value);
    var altura = parseFloat(dataAltura.value);

    //3º Declaracion variables secundarias
    var imc = 0;
    //4º Declarar como variable la respuesta
    var respuesta = document.getElementById('resultado');
    /*  5º Calculo Matematico
    imc = peso/(altura)2
    */
    imc = peso / Math.pow(altura, 2);
    console.log(imc);
    if (imc <= 18.5) {
        respuesta.innerHTML='<h3>FLACUCHO'
    } else if (imc <= 24.9) {
        respuesta.innerHTML="<h3>FENOMENO"
    } else if (imc <= 29.0)
        respuesta.innerHTML='<h3>SE TE HA  IDO DE LAS MANOS'
    else {
        respuesta.innerHTML='<h3>ES MAS FACIL SALTARTE QUE BORDEARTE!!!'
    }
}