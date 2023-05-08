/*faça um programa para calcular o valor de uma viagem.

serão 5 variáveis. sendo elas:
1 - Preço do etanol;
3 - Tipo de combustivél que está no carro;
4 - Gasto médio de combustivél do carro por km;
5 - Distância em km da viagem;
*/

// Imprimir no console o valor que será gasto para realizar a viagem;

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}




