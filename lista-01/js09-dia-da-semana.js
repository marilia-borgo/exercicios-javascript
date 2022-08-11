/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

 let date = 4
 switch (date) {
     case 0:
       day = "Domingo";
       break;
     case 1:
       day = "Segunda";
       break;
     case 2:
        day = "Terça";
       break;
     case 3:
       day = "Quarta";
       break;
     case 4:
       day = "Quinta";
       break;
     case 5:
       day = "Sexta";
       break;
     case 6:
       day = "Sábado";
     default:
         day = "invalido";
   }
   console.log(day)