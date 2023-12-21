/* 
                ==========================
                         VARIABLES
                =========================

        1º Instancias de Variables (Crear las variables)
        Sintaxis:
        var(palabra reservada) nombre variable(minuscula) = (Asignacion) - asociado a un 'valor';
        En el momento que definimos una palabra reservada en el script y es  asignada 'a lo que sea'
        queda cargado en memoria
 
            1.1 Explicita o Implicitamente
                Explicita:
                a.Genero la variable
                    var laVida;
                b. laVida = 'Antonio'

                Implicito
                var laVida ='Antonio';
               
*/
 var nombre ='Antonio Cuadrado Alvarez';

swal({
    title:'Profesor:' +  nombre,
    text:'Centro Formacion Calderon',
    timer:4000,
    button:false,
    icon:'info',
});