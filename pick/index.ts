// Definindo um tipo chamado Person
type Person = {
  name: string;
  age: number;
  email: string;
  address: string;
};

// Usando o utilitário de tipo Pick para criar um novo tipo SelectedPerson
type SelectedPerson = Pick<Person, 'name' | 'email'>;

// Criando um objeto do tipo Person
const person: Person = {
  name: 'Ana',
  age: 30,
  email: 'ana@example.com',
  address: '123 Main St'
};

// Criando um objeto do tipo SelectedPerson usando o objeto person
const selectedPerson: SelectedPerson = {
  name: person.name,
  email: person.email
};

console.log(selectedPerson);
// Output: { name: 'Ana', email: 'ana@example.com' }
