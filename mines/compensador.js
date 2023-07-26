const aposta_inicial = 0.1
const multiplicador_aposta = 0.6
const numero_de_minas = 16
const numero_de_apostas = 15
const truncado = true
let acumulador = aposta_inicial
let aposta_atual = aposta_inicial
let ganho = 0

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

for(i = 1; i <= numero_de_apostas; i++){
  ganho = multiplicador[numero_de_minas] * aposta_atual

  console.log(i,"-------------------------")
  if(truncado){
    console.log("APOSTA     ", (Math.trunc(aposta_atual * 100) / 100).toFixed(2))
    console.log("ACUMULADO  ", (Math.trunc(acumulador * 100) / 100).toFixed(2))
    console.log("GANHO      ", (Math.trunc(ganho * 100) / 100).toFixed(2))
    console.log("GANHO REAL ", (Math.trunc((ganho - acumulador) * 100) / 100).toFixed(2))
  }else{
    console.log("APOSTA     ", ((aposta_atual * 100) / 100).toFixed(2))
    console.log("ACUMULADO  ", ((acumulador * 100) / 100).toFixed(2))
    console.log("GANHO      ", ((ganho * 100) / 100).toFixed(2))
    console.log("GANHO REAL ", (((ganho - acumulador) * 100) / 100).toFixed(2))
  }

  aposta_atual += aposta_atual * multiplicador_aposta
  acumulador += aposta_atual
}
