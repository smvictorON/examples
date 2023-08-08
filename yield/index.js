// Definindo um gerador chamado getNumbers
function* getNumbers(n) {
  for (let i = 1; i <= n; i++) {
    // Yielding (produzindo) o valor atual de i
    yield i;
  }
}

// Criando um iterador usando o gerador getNumbers com n = 5
const numbersIterator = getNumbers(5);

// Iterando através do iterador e exibindo os números gerados
for (const number of numbersIterator) {
  console.log(number);
}
