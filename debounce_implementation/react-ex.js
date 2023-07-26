import React, { useState, useEffect } from 'react';

function Busca() {
  const [termo, setTermo] = useState('');

  // O useEffect é chamado sempre que o termo for alterado
  useEffect(() => {
    // A função debounceBusca é chamada depois de 500ms do último evento
    const debounceBusca = setTimeout(() => {
      // Se o termo não estiver vazio, realiza a busca
      if (termo) {
        console.log(`Buscando por "${termo}"...`);
        // Aqui você pode fazer a chamada para a API ou função que realiza a busca
      }
    }, 500);

    // A função retornada pelo useEffect é chamada antes do próximo efeito ser executado
    return () => {
      // Limpa o timer para evitar que a busca seja realizada novamente
      clearTimeout(debounceBusca);
    };
  }, [termo]); // Dependência: sempre que o termo for alterado, o efeito é chamado novamente

  const handleChange = (event) => {
    // Atualiza o termo com o valor do input, removendo espaços em branco do começo e fim
    setTermo(event.target.value.trim());
  };

  return (
    <div>
      <input type="text" value={termo} onChange={handleChange} />
    </div>
  );
}

export default Busca;

