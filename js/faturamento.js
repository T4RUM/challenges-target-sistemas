const faturamento = [
  { dia: 1, valor: 500 },
  { dia: 2, valor: 1000 },
  { dia: 3, valor: 0 },
  { dia: 4, valor: 800 },
  { dia: 5, valor: 700 },
];

const valores = faturamento.map(d => d.valor).filter(v => v > 0);
const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

const diasAcimaDaMedia = faturamento.filter(d => d.valor > media).length;

console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
