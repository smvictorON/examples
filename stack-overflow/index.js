// Exemplo ruim:
function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// console.log(fatorial(100)); // Uncaught RangeError: Maximum call stack size exceeded

// Exemplo bom:
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// console.log(fatorial(100)); // 28462596809170545189064132121198688901480548026006542...


// Função recursiva para calcular o fatorial de um número
function fatorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  } else {
    // Chamada recursiva com otimização de cauda
    return fatorial(n - 1, acc * n);
  }
}

// Chamada da função para calcular o fatorial de 10
console.log(fatorial(10)); // Output: 3628800
