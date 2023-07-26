//do a recursive function to print the first100 elements of fibonacci series
function fibonacci(n) {
  console.log(n)
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
//ORDEM DE EXECUÇÃO
fibonacci(4)
// (4)
// ├─> (3)
// │   ├─> (2)
// │   │   ├─> (1)
// │   │   └─> (0)
// │   └─> (1)
// └─> (2)
//     ├─> (1)
//     └─> (0)

// for (i = 1; i <= 6; i++) {
//   console.log("res", fibonacci(i))
// }