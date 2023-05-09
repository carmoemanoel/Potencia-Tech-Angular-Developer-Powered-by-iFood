/*
Estamos importando o que está sendo exportado por um outro arquivo.
 */

const {gets, prints} = require('./funcoes-auxiliares');


/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunoos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    98
    23

    Saída:
    98
*/

//console.log(gets());

const quantidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = gets();
    if(numerosSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numerosSorteado
    }
    
}

prints(maiorValorEncontrado);


