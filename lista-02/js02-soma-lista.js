/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */

 let numsoma = [90,89,6,23,56,87,98]
 let soma = 0
 
 for (var numero of numsoma){
     soma += numero
 }
 
 console.log(`O resultado da soma é: ${soma}`)