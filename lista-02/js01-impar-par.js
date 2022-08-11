/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

let listaparimpar = [1,2,3,4,5,6,8,9,10]

for (var number of listaparimpar){
    if (number % 2 == 0){
        console.log(`O número ${number} é par`)
    }else{
        console.log(`O número ${number} é impar`)
    }
}
