/*faça um programa para calcular o valor de uma viagem.

serão 3 variáveis. sendo elas:
1 - Preço di combustivél;
2 - Gasto médio de combustivél do carro por km;
3 - Distância em km da viagem;
*/




const precoCombustive = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustive;
console.log(valorGasto.toFixed(2));