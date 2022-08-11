/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 * 
 * ENTRADA          SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */


 let entrada= "Y"
 if(entrada.toLowerCase() =='y' || entrada.toLowerCase()=='yes'|| entrada.toLowerCase()=='sim'){
     console.log('é valida')
 } else{
     console.log('não é valida')
 }