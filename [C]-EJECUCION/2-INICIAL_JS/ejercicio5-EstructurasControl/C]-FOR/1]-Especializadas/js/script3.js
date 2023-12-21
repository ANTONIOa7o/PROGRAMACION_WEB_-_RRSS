/* 
Antecendentes:
    La llegada de html5, al apoyarse en nuevas librerias, hace que se asocia
    a Js.
    -Resolvia de manera mas eficaz determinadas acciones de los elementos
    -Introduce una libreria para poder seleccionar los elementos de html,
    al igual que en css3, surgian los selectores. 
    -Alimenta con estructaras tales como:
        i)querySelector
            una selecion parecida al getElementById, con una ventaja, que apunta
            no solo un lugar en concreto, sino a varios elementos, de estilos, 
            className
        ii)querySelectorAll
            una selecion parecida al getElementById, con una ventaja, que apunta
              no solo un lugar en concreto, sino a varios elementos funcionales

*/
/* Con este método consigo guardar en la var botones un array de los botones y sus eventos
asociado
 */
var botones = document.querySelectorAll('button');

/* Trabajando la estructura de control de for of, puedo con ese array de evento
guardarlos en una variable como objetos
*/
for (x of botones) {
    
    /* Aprovechando x, quiero el recorrido obtenido y me saque a una accion concreta, click
    paara ello utilicerammeos el metodo addEventListener() que definimos a continuacion:
    Sintaxis:

        target.addEventListener('tipo evento',funcion a lanzar(),boolean);

        por defecto siempre será true, boolean, sino se pone, entiende como true
    
    */
   x.addEventListener('click',function(){
    document.querySelector('.text-danger', '.mensaje').innerHTML= this.innerHTML
   });
   /* this. para  */
}
