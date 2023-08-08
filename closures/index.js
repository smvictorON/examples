// Definição de uma função externa chamada outerFunction
function outerFunction() {
  // Declaração de uma variável no escopo da outerFunction
  let outerVariable = 10;

  // Definição de uma função interna chamada innerFunction
  function innerFunction() {
    // Acessando e imprimindo o valor da variável outerVariable
    console.log(outerVariable);
  }

  // Retornando a função innerFunction da outerFunction
  return innerFunction;
}

// Chamando a função outerFunction e atribuindo seu resultado à variável closureFunction
const closureFunction = outerFunction();

// Chamando a função closureFunction, que foi criada dentro do escopo da outerFunction
closureFunction(); // Output: 10 (imprime o valor da outerVariable)
