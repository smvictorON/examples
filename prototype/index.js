// Criando um objeto "pessoa" e definindo uma propriedade "nome" nele
const pessoa = {
  nome: 'João'
};

// Criando um novo objeto "aluno" e definindo uma propriedade "curso" nele
const aluno = {
  curso: 'Ciências da Computação'
};

// Estabelecendo a cadeia de protótipos: aluno herda de pessoa
Object.setPrototypeOf(aluno, pessoa);

// Acessando as propriedades do objeto "aluno"
console.log(aluno.nome); // Output: "João"
console.log(aluno.curso); // Output: "Ciências da Computação"
