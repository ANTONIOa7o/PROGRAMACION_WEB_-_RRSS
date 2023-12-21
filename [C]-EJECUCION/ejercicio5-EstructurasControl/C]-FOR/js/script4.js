/* 
Mostrar nuestro 1º array
*/

var provincias =['-------','Valencia','Madrid','Sevilla','Málaga'];

/* Necesito de alguna manera guardarme en una variable todas las provincias
que hay en la variable provincias */

for(var p =0; p<provincias.length;p++){
    var provinciasOpcion = new Option(provincias[p])
    document.getElementById('volcadoProvincias').options[p] = provinciasOpcion
}
/* Onchange, actua en los elementos de interaccion donde hay una conexion
de inteface con el usuario, es decir, lo encontraremos en los:
a) input
b)select
c)Textarea
d)checked
d) En cualquiera de los casos que se percibe una alteracion de los elementos

*/

function seleccion() {
   var mostrar = document.getElementById('volcadoProvincias').options[document.getElementById('volcadoProvincias').selectedIndex].text
    /* selectedIndex propiedad de seleccion de un elemento o elementos de html, llamandolo como objeto */
   swal('has seleccionado: ' + mostrar) 

}