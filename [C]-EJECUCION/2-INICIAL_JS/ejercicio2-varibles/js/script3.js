/* 
        Las posibilidad de entrar en la interfaz  del sistema operativo del propio
        usuario, son muy reestrictivas. Pero para algunas aplicaciones pueden ser muy utiles
        auque no ofrezcan una vision estica muy lograda.
        document. era una estructura de partida del script
        windows
        
*/
// Declaración de variables
var nombre;
var apellidos;
var edad;
// asignado a la variable  un valor

 nombre = window.prompt('Escribe tu nombre');
 console.log(nombre);
 apellidos = window.prompt('Escribe tu Apellidos');
 console.log(apellidos);
 edad = window.prompt('Escribe tu Edad');
 console.log(edad);

 /* Aqui el metodo .prompt() Genera un dialogo, asocia a dos botones
 percibimos como absorbe el  valor la variable al introducir los datos el usuario
    ☢ IMPORTANTE:
        Todo, Todo, Todo valor que recogemos en la interfaz del usario siempre vendrá definido
        por el tipo de variables STRING

 */

        document.write('<h3>Hola! ' +  nombre + ' ' +  apellidos + 
        'Con  edad ' + edad + 'Bienvendio  a mi Pagina');


