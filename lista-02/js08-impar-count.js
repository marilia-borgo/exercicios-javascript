/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */
 let numeros = [2,4,6,8,1,3]
 let contadorPar = 0
 let contadorImpar = 0
 
 for (var numero of numeros) {
     if (numero % 2 == 0){
         contadorPar += 1
     }else{
         contadorImpar += 1
     }
 }
 
 console.log(`A quantidade de números pares é: ${contadorPar}`)
 console.log(`A quantidade de números impares é: ${contadorImpar}`)