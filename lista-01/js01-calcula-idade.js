/**
 * Faça um programa que dado o ano de nascimento, mostre a idade!
 *
 * Tarefa:
 * - pesquise como pegar o ano atual em JS
 * - altere a expressão da var idade para usar o ano atual
 * - use node para rodar este script js
 *   $ node lista-01/js01-calcula-idade.js
 *   👉 Quem nasceu em 2002, sua idade é 20
 *  - altere a variável para outros anos e verifique se a resposta está correta
 * 
 * IMPORTANTE:
 * - Não precisa obter do usuário os dados de entrada
 * - Não precisa fazer uma página web para obter os dados
 * - Apenas alterar o valor da variável para diferentes valores e testar
 *   a lógica do programa
 */

 let dataAtual = new Date()
 dataAtual = dataAtual.getFullYear()
 let anoNasciemtno = 2002
 var idade = dataAtual - anoNasciemtno
 var resultado = `quem nasceu em {anoNasciemtno} sua idade é {idade}`
 console.log(resultado)
 