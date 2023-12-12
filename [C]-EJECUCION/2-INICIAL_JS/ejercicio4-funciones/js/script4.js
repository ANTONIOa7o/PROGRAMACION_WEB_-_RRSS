/* 
            RECOGIDA DE LA VARIABLE II (CONTROL MAS DIRECTO)

    a) Se realizará desde la propiedad .value, es decir, vamos a acceder al valor
    de la variable que en ese momento es insertada en el input.
    b) Mostraremos el lugar donde apunta dicha variable con la 
    propiedad .getElementById
    Sintaxis: Combinacion  de ambas propiedades
    document.getElementById('agujero apunta la variable').value

    -OS RECUERDO QUE LA VARIABLE A RECOGER  SIEMPRE ES DE TIPO STRING-
*/
function entrar() {
    //1º difinimos variables
    var miNombre;
    var miApellido;
    var miEmail;
    //2º Recoger la variable apuntando a su lugar
    miNombre = document.getElementById('nombre').value
    miApellido = document.getElementById('apellido').value
    miEmail = document.getElementById('email').value
    //3º Mostrar las variables
    document.getElementById('resultado').innerHTML
    ='AUTORIZACION DE ACCESO:  ' + miNombre  + ' ' + miApellido +  ' con el email: ' + miEmail

swal({
    title:'Bienvenido:' +  miNombre + ' ' + miApellido ,
    text:'AUTORIZACION',
    timer:4000,
    button:false,
    icon:'success',
});
}

