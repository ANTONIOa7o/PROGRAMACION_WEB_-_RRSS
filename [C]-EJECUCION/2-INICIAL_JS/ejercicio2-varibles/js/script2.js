/* 
                        ==================                
                        TIPOS DE VARIABLES
                        ==================

            Introduccion:
            4 conceptos que definen siempre a la variable:
             a. Declaracion
             b. Tipo de variable
                ->STRING Cadena de caractes, serán el conjunto de palabras 
                que entiende y percibe el usuario, conocidas como
                ->NUMBER  Cualquier numero real asociado a un algoritmo
                ->BOOLEAN  Define la filosofia del lenguaje binario, 1 o 0
                ,es decir,  define esta variable con la dualidad, 
                 si/no, true/false verdadero/falso, se representa con los valores
                 true o false
             c. valor.
             d. concepto del valor (=)
             En ocasiones el tipo y el  valor se definiran mutuamente
        
*/

//a.
var texto;
var numero;
var buleana;
var igualdad;
//b y c
texto = 'Cadena de texto, es decir, cadena de caracteres';
numero = 5;
/* 📌Reflexion de dejar la variable vacia, a la espera de un valor
var texto='';
var numero = 0;    
*/
buleana = true;

igualdad == 5;

/* Trabajamos aqui otro metodo de impresion, para poder trasladar mensajes o 
impresiones al usuario
Sintaxis:
document.write(parámetros)
*/
document.write('<h3>Variable string: ' + texto + '<br>');
document.write('<h3>Variable number: ' + numero + '<br>');
document.write('<h3>Variable boolean: ' + buleana + '<br>');

/* Caracteres de escape(backslash)
Sintaxis:               Descripcion
  \n                        salto de linea;
  \t                        tabulacion
  \simbolo                  \'(cuando quiero poner comillas)

*/
console.log('\t'+ texto + '\n' + numero + '\n'+ buleana);




