//Atencion: Recoger la variable con metodos no directos, necesita:
/* var base = inputBase; */

function algoritmo() {
   var inputBase = parseInt(base.value);
    console.log(inputBase);
    //Variable secundaria
    var contenido = '';
    for (var i = 1; i <= 10; i++) {
        /* Gestiono del los valores del 1 al 10 */
        contenido += 'base: ' + inputBase + 'x' + 'potencia' + i + ' = ' + Math.pow(inputBase,i) + '<br>';
        console.log(contenido);
    }
    document.getElementById('resultado').innerHTML=(contenido)
}
