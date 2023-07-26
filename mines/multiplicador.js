const colunas = 5
const linhas = 5
const numero_de_casas = linhas * colunas

const multiplicador = {
  2: 1.03,
  3: 1.08,   // +0.05
  4: 1.13,   // +0.05
  5: 1.19,   // +0.06
  6: 1.25,   // +0.06
  7: 1.32,   // +0.07
  8: 1.40,   // +0.08
  9: 1.48,   // +0.08
  10: 1.58,  // +0.10
  11: 1.70,  // +0.12
  12: 1.83,  // +0.13
  13: 1.98,  // +0.15
  14: 2.16,  // +0.18
  15: 2.38,  // +0.22
  16: 2.64,  // +0.26
  17: 2.97,  // +0.33
  18: 3.39,  // +0.42
  19: 3.96,  // +0.57
  20: 4.75,  // +0.79
  21: 5.94,  // +1.19
  22: 7.92,  // +2.98
  23: 11.88, // +4.96
  24: 23.75, // +11.87
}

//usando o 20 como exemplo tenho 80% de chances de acertar uma minas e 20% de nao acertar
//ou ouseja 5x1 o certo seria pagar 5 e nao 4.75, aí talvez o calculo seja achar quanto
//20% é em 80%, no caso 25%, 1% de 25 é 0.25 sendo assim
// o que deveria ser 5.00
// menos 1%          0.25
// é o que é usado   4.75

//agora usando 5 em que seria 80% de acertar e 20% de errar, ele deveria pagar 1.20 ao
//inves de 1.19 qual é o calculo?
