import { useState } from 'react';

function Indice({ texto, subitens, adicionarSubitem }) {
  const [mostrarSubitens, setMostrarSubitens] = useState(false);

  function handleClick() {
    setMostrarSubitens(!mostrarSubitens);
  }

  return (
    <div>
      <button onClick={handleClick}>{texto}</button>
      <button onClick={adicionarSubitem}>Adicionar Subitem</button>
      {mostrarSubitens && (
        <ul>
          {subitens.map((subitem, index) => (
            <li key={index}>
              <Subitem texto={subitem} />
            </li>
          ))}
          {subitens.length === 0 && <li>Nenhum subitem</li>}
        </ul>
      )}
    </div>
  );
}

function Subitem({ texto }) {
  return <span>{texto}</span>;
}

function App() {
  const [itens, setItens] = useState(['Item 1', 'Item 2', 'Item 3']);

  function adicionarSubitem(index) {
    const novosItens = [...itens];
    novosItens[index] = [...(novosItens[index] || []), 'Subitem'];
    setItens(novosItens);
  }

  return (
    <div>
      <h1>Índices e Subitens</h1>
      {itens.map((item, index) => (
        <Indice
          key={index}
          texto={item}
          subitens={itens[index]}
          adicionarSubitem={() => adicionarSubitem(index)}
        />
      ))}
    </div>
  );
}

export default Indice;