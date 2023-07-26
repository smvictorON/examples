let vetor = [];
const linhas = 5
const colunas = 5
const numero_de_casas = linhas * colunas
const numero_de_minas = 15
const casa_da_aposta = 13
const valor_de_saida = 100
const valor_critico = 8
const aposta_base = 0.1
const saldo_para_jogo = 25
const numero_de_jogos = 1
const maximo_de_apostas = 1000
const multiplicador_aposta = 0.7
const details = true

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

let vencidos = 0, perdidos = 0, saldo_vencido = 0, saldo_perdido = 0;

for(i=0;i<numero_de_jogos;i++){

  let saldo = saldo_para_jogo
  let valor_aposta = aposta_base
  let numero_de_apostas = 0
  let apostas_criticas = 0

  while (saldo >= 0 && saldo <= valor_de_saida && numero_de_apostas < maximo_de_apostas) {
    vetor = [];
    for (let i = 1; i <= numero_de_casas; i++) {
      vetor.push({posicao: i, valor: "win"});
    }

    let count = 0
    while(count < numero_de_minas){
      const posicaoLoss = Math.floor(Math.random() * vetor.length);
      if(vetor[posicaoLoss].valor === "loss")
        continue

      vetor[posicaoLoss].valor = "loss";
      count++
    }

    if(valor_aposta > valor_critico)
      apostas_criticas++

    if(vetor[casa_da_aposta - 1].valor === "win"){
      if(details)
        console.log(
          parseFloat(saldo.toFixed(2)),
          " + ",
          parseFloat((valor_aposta * multiplicador[numero_de_minas]).toFixed(2))
        )

      saldo += valor_aposta * multiplicador[numero_de_minas]
      saldo = parseFloat(saldo)
      valor_aposta = aposta_base
    }else{
      if(details)
        console.log(
          parseFloat(saldo.toFixed(2)),
          " - ",
          parseFloat(valor_aposta.toFixed(2))
        )

      saldo -= valor_aposta
      saldo = parseFloat(saldo.toFixed(2))
      valor_aposta += (valor_aposta * multiplicador_aposta)

      if(saldo < valor_aposta)
        break

    }

    numero_de_apostas++
  }
  console.log(numero_de_apostas, saldo.toFixed(2), saldo > saldo_para_jogo ? "GANHOU" : "PERDEU", apostas_criticas);

  if(saldo > saldo_para_jogo){
    vencidos++
    saldo_vencido += (saldo - saldo_para_jogo)
  }else{
    perdidos++
    saldo_perdido += -(saldo - saldo_para_jogo)
  }
}

console.log("----------------------------------------");
console.log("Total Vencidos: ", vencidos, "   Saldo: ", parseFloat(saldo_vencido.toFixed(2)));
console.log("Total Perdidos: ", perdidos, "   Saldo: ", parseFloat(saldo_perdido.toFixed(2)));
console.log("Compensou?: ", saldo_vencido > saldo_perdido ? "SIM" : "NÃO");
console.log("Saldo final: ", parseFloat((saldo_vencido - saldo_perdido).toFixed(2)))
console.log("Numero de jogos: ", numero_de_jogos)
console.log("----------------------------------------");
console.log("\n\n\n\n")
