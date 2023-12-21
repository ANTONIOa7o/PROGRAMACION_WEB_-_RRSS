
function inicioReloj() {
    //1º declaracion de variables
    var hoy = new Date();
    //2º Variables secundarias reloj 
    var horas = hoy.getHours();
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();
    
    /* Uso de la maquina perfecta o funcion perfecta para generar las  decenas ↓ */
    segundos = decenas(segundos);
    minutos= decenas(minutos);
    horas = decenas(horas);

    //3º Variables secundarias del Calendario 
    var diaSemana = hoy.toLocaleDateString('es-eu', { weekday: 'long' });
    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();
    //Mostramos Reloj
    document.getElementById('reloj').innerHTML =
        '' + horas + ':' + minutos + ':' + segundos;

    //Gestionando la variable mes del Calendario
    switch (mes) {

        case 0:
            mes = 'Enero';
            break;
        case 1:
            mes = 'Febrero';
            break;
        case 2:
            mes = 'Marzo';
            break;
        case 3:
            mes = 'Abril';
            break;
        case 4:
            mes = 'Mayo';
            break;
        case 5:
            mes = 'Junio';
            break;
        case 6:
            mes = 'Julio';
            break;
        case 7:
            mes = 'Agosto';
            break;
        case 8:
            mes = 'Septiembre';
            break;
        case 9:
            mes = 'Octubre';
            break;
        case 10:
            mes = 'Noviembre';
            break;
        case 11:
            mes = 'Diciembre';
            break;

        default:
            mes = 'Error 404# falta de conexion'
            break;
    }
    //Mostramos el Calendario
    document.getElementById('calendario').innerHTML = diaSemana +
        ' ' + dia + ' ' + mes + ' ' + año;
       
       
        
  /* Ejecuciones de funcion a partir de un parametro de tiempo definido
  Dos formas de ejecucion:
    a) Ejecucion Clasica:
        setTimeout(funcion(){funcionAllamar(),funcionAllarmar2},temporizamos en milisegundos);

    b) Ejecucion mutada:
        var t = setTimeout(()=>{funcionAllamar(),funcionAllarmar2},timeout); 
  
  */      
setTimeout(function(){inicioReloj()},1000);
}
/* Ejecucion de una funcion perfecta, será la ejecucion de referencia por donde quiera
hacer pasar una variable
Aparecerá  un concepto nuevo, necesario de definir como es el  return
*/
function decenas(x) {

    if (x<10) {
       x = '0'+ x 
    }
    return (x);
}