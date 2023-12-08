/* 
                ==============================
                las funciones: Interactividad
                ==============================
        
        Entendidas y por ello definidas como una declaracion o expresiones funcionales.
        Presentará una palabra reservada 'function'
        Sintaxis:
        1. nombre de la funcion (sensible a las grafias, minuscula inicial)
        2. lista de parametros que la definen, estarán entre parentesis y separados por ,
            (parametro1, parametro2,parametro3,....)
        3. acotacion de su ambito. definida por las llaves '{}'dentro de dichas llaves
        serán el ambitoo de accion de nuestra funcion
        verbigracia:
            function nombreFuncion(){

                el conjunto de directivas a ejecutar(otras funciones)

            }
*/
/*                      >>>>>>>>ENTORNO DE LAS VARIABLES<<<<<<<<<<<<

                    El  entorno lo define su ambito, es decir, globales  o locales
                    => Variables Globales:
                        + Hasta ahora todas han sido referenciadas globalmente
                        + Se pueden acceder a su tipo y valor desde cualquier punto
                        del script(ventaja)
                        + Permanece cargada en la memoria adyacente (desventaja)
                        + Uso exclusivo cuando necesitamos acceso transversal
                        + Variables globales como variable eje

*/

/* Ej: Variable Global ↓    */
                var nombre = prompt('Introduce tu nombre');

function saludar() {

    swal('Hola!, bienvenido : ' + nombre);

}
/* 
                => Variables Locales
                    + Se encuentre dentro del entorno acotado de la funcion
                    + su acceso queda restringido a la accion de la funcion
                    + su ejecucion carga a la llamada de la funcion
                    + La variable, al solo ejecutar a la accion de  la funcion
                    no se  aloja en carga de memoria. Carga en la ejecución y
                    es desalojada de  la  memoria al finalizar  la funcion
                    +Uso de propiedad, estará   asociada a la arquitectura de
                    la funcion  concreta  en la que se encuentre
                    +Variables tomadas como complementarias o secundarias
                    + Por defecto, no podremos acceder a dichas variables desde ningun
                    otro ambito que no sea la de la funcion

*/

function despedida() {

        //Variable local ↓
                var apellido = 'Cuadrado';

    swal('Vuelve pronto: ' + nombre + " "  + apellido);
    
}