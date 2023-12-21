//1º   Declaracion de variables locales

function cta() {
    var usuario = document.getElementById('user').value;
    /* Importante:  Reduccion de recogida de variable, es decir, script
    va adaptandose y muta a menores caracteres.  */
    var pasword = pw.value;
    document.getElementById('resultado').innerHTML=
    'Acceso permitido: ' + usuario + ' Con clave: ' + pasword;
    
}
function borrar() {
    document.getElementById('resultado').innerHTML=''
}

function redireccionar() {
   /*  location.href='https://www.bet365.es/' */
   location.href='5-variablesFuncionales.html'
    
}