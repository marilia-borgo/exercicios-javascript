/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

var hoje = new Date().getDate();
var mes = new Date().getUTCMonth()+1;
console.log(`Hoje é dia ${hoje} do mes ${mes}`)
i = 1



while (i < 90){
    if (mes%2==0 && hoje>=30&& mes!=8 && mes!=2){
    mes = mes+1
    hoje = 1
    hoje = hoje + 6
    hoje > 31 ? null : console.log(`Sua folga será dia ${hoje+1} e dia ${hoje+2} do mês ${mes}`)
    i = i + 8
    
    }
    

    else if (mes%2!=0 && hoje>=31 && mes!=8 && mes!=2) {
        mes = mes+1
        hoje = 1
        hoje = hoje + 6
        hoje > 31 ? null : console.log(`Sua folga será dia ${hoje+1} e dia ${hoje+2} do mês ${mes}`)
        i = i + 8
        

    }

    else if (hoje>=31  && mes==8 ){
        mes = mes+1
        hoje = 1
        hoje = hoje + 6
        hoje > 31 ? null : console.log(`Sua folga será dia ${hoje+1} e dia ${hoje+2} do mês ${mes}`)
        i = i + 8
       

    }
    else if (hoje>=28 && mes==2 ){
        mes = mes+1
        hoje = 1
        hoje = hoje + 6
        hoje > 31 ? null : console.log(`Sua folga será dia ${hoje+1} e dia ${hoje+2} do mês ${mes}`)
        i = i + 8
        

    }
    else {
        hoje = hoje + 6
        hoje > 31 ? null : console.log(`Sua folga será dia ${hoje+1} e dia ${hoje+2} do mês ${mes}`)
        i = i + 8
        
    }

}

