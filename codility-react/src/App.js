import './App.css';

import React, { useState, useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      // aqui você pode enviar a requisição de busca com o valor de searchText
      console.log(`Pesquisando por "${searchText}"...`);
    }, 2000);

    // limpa o timer anterior sempre que o usuário digita uma nova letra
    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchTextChange} />
      <p>Esperando 2 segundos para pesquisar por "{searchText}"...</p>
    </div>
  );
}

export default App;