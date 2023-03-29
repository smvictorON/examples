const lodash = require('lodash')

const showLog = (text) => {
  console.log(text)
}

//tempo de espera para executar a função chamada!
const delayedLog = lodash.debounce(showLog, 2000)

//mesmo se chamarmos varias vezes com espaço de 1s, ele só vai executar a ultima vez!
delayedLog('1')
setTimeout(() => {
  delayedLog('2')
  setTimeout(() => {
    delayedLog('3')
    setTimeout(() => {
      delayedLog('4')
      setTimeout(() => {
        delayedLog('5')
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

