/* 
               ===========================
                método: .getElementById()
            ================================

    *Nos ayuda a devolver a la estructura(html) y a un elemnto que contenga el atributo id='foco';
    **El valor que especifica, traslada como vehiculo de referencia la estructura definida en
    el script.
    *** Sintaxis:

  1º  dirigirnos a lugar 
    donde se ejecuta este
    metodo
        ⇓
        ⇓       2º metodo()
        ⇓            ⇓
        ⇓
    document.getElementById('3º nombre del id, que hace referencia al lugar del elemente de html')
*/

/* 
Introduccion:
JavaScript, tendrá unas funciones globales, cargadas en su metalenguaje, que no dejan de ser 
una libreria de funciones a nuestra disposicion. 
Pero que accederemos a ellas como objetos
*/

/* A] objeto Math()
    Nos aporta, de forma inmediata acceder a funcionalidades algoritmicas simple, 
    complejas o derivadas
*/

function funcionesMatematicas() {
    var numero =8;

    document.getElementById('resultado').innerHTML=
    '<h2> Objeto Math() </h2>' +
    'logaritmo: ' + Math.log(1000)  + '<br>' +
    'Exponencial: ' + Math.exp(numero)  + '<br>' +
    'Raiz Cuadrada: ' + Math.sqrt(9)  + '<br>' +
    'Potencia: ' + Math.pow(2,numero)  + '<br>' +
    'Valor Absoluto: ' + Math.abs(-1000) + '<br>' +
    'Redondeo a la baja: ' + Math.floor(6.3459)  + '<br>' +
    'Redondeo al alza: ' + Math.ceil(6.3459)  + '<br>' +
    'Redondeo medio: ' + Math.round(6.3459)  + '<br>' +
    'Randon o semilla nº: ' + Math.random() + '<br>' +
    'Rando de intervalos: ' + Math.random()*10 + '<br>' +
    'Valor maximo: ' + Math.max(9,3,5,2)+ '<br>' +
    'Valor Pi(₶)' + Math.PI + '<br>' +
    'Coseno ₶(anidacion): ' + Math.cos(Math.PI) + '<br>' +
    /* Como paso de numero a string?, hasta ahora, teniamos
    claro, que los datos que vienen desde la interfaz del usuario era string
    y podiamos con el metodo parse,  pasarlo a  nº, como pasaremos de numero a string */
    'Cambio de tipo number a string: '  + numero.toString();


    
}