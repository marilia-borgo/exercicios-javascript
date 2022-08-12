/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

var diaDoMes = new Date().getDate();
var mes = new Date().getUTCMonth();
console.log(diaDoMes, mes)
i = 1

while (i < 90){
    diaDoMes = diaDoMes + 6
    console.log(diaDoMes+1, diaDoMes+2)
    diaDoMes = diaDoMes + 2
    i = i + 8
}
