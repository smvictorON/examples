// Importa todo o Lodash
import _ from 'lodash';

// Seleciona o campo de busca
const inputBusca = document.querySelector('#input-busca');

// Função que faz a busca
const fazerBusca = (termo) => {
  // Aqui você pode fazer a chamada para a API ou função que realiza a busca
  console.log(`Buscando por "${termo}"...`);
}

// Função debounce que espera 500ms antes de chamar a função de busca
const debounceBusca = _.debounce((termo) => fazerBusca(termo), 500);

// Adiciona um evento de digitação ao campo de busca
inputBusca.addEventListener('keyup', (event) => {
  // Pega o valor digitado no campo de busca
  const termo = event.target.value.trim();

  // Verifica se o termo é válido e inicia a busca
  if (termo) {
    debounceBusca(termo);
  }
});


