/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */


 let entrada = [98,34,65,789]
 let maiorNumero = 0
 
 for (var numero of entrada){
     if (numero > maiorNumero){
         maiorNumero = numero
     }
 }
 console.log(maiorNumero)
 