// Criando um objeto do tipo Person
var person = {
    name: 'Ana',
    age: 30,
    email: 'ana@example.com',
    address: '123 Main St'
};
// Criando um objeto do tipo SelectedPerson usando o objeto person
var selectedPerson = {
    name: person.name,
    email: person.email
};
console.log(selectedPerson);
// Output: { name: 'Ana', email: 'ana@example.com' }
