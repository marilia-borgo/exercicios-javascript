/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */
 let range = 151
 let contador = 1
 
 while (contador < 151 && contador > 0){
     if (contador % 2 != 0){
         console.log(contador)
     }
     contador++
 }