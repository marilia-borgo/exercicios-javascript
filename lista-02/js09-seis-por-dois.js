/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

var hoje = new Date()
console.log(`Hoje é dia ${hoje}`)
i = 1



while (i < 90){
    trabalho=new Date(hoje.setDate(hoje.getDate() + 6))
    folga= new Date(hoje.setDate(trabalho.getDate() + 1))
    console.log(folga.toDateString())
    folga= new Date(hoje.setDate(folga.getDate() + 1))
    console.log(folga.toDateString())
    i=i+8
   
}



