/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

 let numeros = [349,89,900]
 let maiorNumero = 0
 let segundoMaiorNumero = 0
 
 for (var numero of numeros){
     if (numero > maiorNumero){
         maiorNumero = numero
     }
     if (numero < maiorNumero && numero > segundoMaiorNumero){
         segundoMaiorNumero = numero
     }
 }
 
 console.log(segundoMaiorNumero)