function menuDia() {
    /* 
    1º Declaro variable
    */
    var fecha = new Date();
    var dia = fecha.getDay();
    //2º Variable residual, de apoyo
    var menu = '';
    var postre = '';
    var platoA = '';
    var platoB = ''
    precio1=0
    //3º Estructura de Control
    switch (dia) {
        case 0:
            menu = 'Codido Madrileño'
            precio1=12
            break;
        case 1:
            menu = 'Cerrado por descanso'
            break;
        case 2:
            menu = 'Codido Montañes'
            precio1=12
            break;
        case 3:
            menu = 'Caldereta de Cordero'
            break;
        case 4:
            menu = 'Judiones a la Vaca'
            break;
        case 5:
            menu = 'Potage Gallego'
            break;
        case 6:
            menu = 'Paella de Castellón'
            break;

        default:
            menu = 'Error conexion#'
            break;
    }
//4º Mostrar la seleccion ejecutada
document.getElementById('resultado').innerHTML= 'El menu de hoy es: ' + menu +'<br>'+ precio1 +'€';
}