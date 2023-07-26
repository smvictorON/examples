const colunas = 5
const linhas = 5
const numero_de_casas = linhas * colunas
const numero_de_jogadas = 10

for(numero_de_minas=2;numero_de_minas<=24;numero_de_minas++){
  console.log("------------------------------------------------")
  console.log("Com",numero_de_minas,"minas")

  let erro = (numero_de_minas * 100 /  numero_de_casas) / 100

  for(i=1;i<=numero_de_jogadas;i++){
    if(i === 1)
      console.log((Math.pow(erro,i) * 100).toFixed(2).padStart(5, "0"),"% em", i, "jogada")
    else
      console.log((Math.pow(erro,i) * 100).toFixed(2).padStart(5, "0"),"% em", i, "jogadas seguidas")
  }
}
console.log("\n")