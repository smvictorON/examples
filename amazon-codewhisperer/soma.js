//esse código foi totalmente gerado com AI da amazon, alt+c para requisitar sugestao
let array = [];
for (let i = 0; i < 100; i++) {
  array[i] = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
}
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum)
  return sum;
}
sum(array)