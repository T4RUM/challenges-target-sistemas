function inverterString(str) {
  let resultado = '';
  for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
  }
  return resultado;
}

const string = 'Target Sistemas'; // Aqui passamos a palavra ou frase que sera invertida

console.log(`String original: ${string}`);
console.log(`String invertida: ${inverterString(string)}`);
