    
function aplicarDto() {

     //RECOGEMOS la variable
     var option =document.getElementById('opcion').value;

   
    //  Variable; donde SOLTAMOS el resultado
    var resultado = document.getElementById('resultado');
    // Estructura de Analisis   de la variable que entra
    switch (option) {

        case 'platium':
            resultado.innerHTML='Enhorabuena es usted afortunadisimo'
            break;

            case 'deluxe':
                resultado.innerHTML='Enhorabuena es usted afortunadisimo'
            break;

            case 'premium':
                resultado.innerHTML='Enhorabuena es usted afortunadisimo'
            break;
    
        default:
            resultado.innerHTML='Su resultado no ha sido premiado'
            break;
            /* Se puede trabajar tambien los swal respuestas de llamada */
    }



    
}