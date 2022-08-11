/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

 let nummedia = [8,9,6,5]
 let soma, media, contador = 0;
     
 
 for (var numero of nummedia){
     soma += numero
     contador++
 }
 media = soma/contador
 console.log(`A média é: ${media.toFixed(1)}`)
 