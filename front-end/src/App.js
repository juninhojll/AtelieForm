import React, { useState } from 'react';
import JsonPretty from 'react-json-pretty';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import 'react-json-pretty/themes/1337.css'
import NestedList from './components/NestedList';


const App = () => {
  const [titulos, setTitulos] = useState([]);
  const [nomeTitulo, setNomeTitulo] = useState('');
  const [nomeSubtitulo, setNomeSubtitulo] = useState('');
  const [nomeCampo, setNomeCampo] = useState('');

  const addTitulo = () => {
    const novoTitulo = {
      type: 'object',
      title: nomeTitulo,
      properties: {}
    };
    setTitulos([...titulos, novoTitulo]);
    setNomeTitulo('');
  };

  const addSubtitulo = (indiceTitulo) => {
    const novosTitulos = [...titulos];
    const titulo = novosTitulos[indiceTitulo];
    const subtitulos = Object.values(titulo.properties);
    const novoSubtitulo = {
      type: 'object',
      title: nomeSubtitulo !== '' ? nomeSubtitulo : nomeTitulo + ' ' + (subtitulos.length + 1),
      properties: {}
    };
    titulo.properties[novoSubtitulo.title] = novoSubtitulo;
    setTitulos(novosTitulos);
    setNomeSubtitulo('');
  };

  const addCampo = (indiceTitulo, indiceSubtitulo) => {
    const novosTitulos = [...titulos];
    const titulo = novosTitulos[indiceTitulo];
    const subtitulos = Object.values(titulo.properties);
    const subtitulo = subtitulos[indiceSubtitulo];
    const novosCampos = Object.values(subtitulo.properties);
    const novoCampo = {
      type: 'string',
      title: nomeCampo !== '' ? nomeCampo : 'Campo ' + (novosCampos.length + 1)
    };
    subtitulo.properties[novoCampo.title] = novoCampo;
    setTitulos(novosTitulos);
    setNomeCampo('');
  };

  return (
    <>
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '1', marginRight: '10px' }}>
      <div>
        <input type="text" value={nomeTitulo} onChange={(e) => setNomeTitulo(e.target.value)} />
        <button onClick={() => addTitulo()}>Adicionar Título</button>
      </div>
      <div>
        <input type="text" value={nomeSubtitulo} onChange={(e) => setNomeSubtitulo(e.target.value)} />
        <button onClick={() => addSubtitulo(titulos.length - 1)}>Adicionar Subtítulo</button>
      </div>
      <div>
        <input type="text" value={nomeCampo} onChange={(e) => setNomeCampo(e.target.value)} />
        <button onClick={() => addCampo(titulos.length - 1, Object.values(titulos[titulos.length - 1].properties).length - 1)}>Adicionar Campo</button>
      </div>
      <JsonPretty data={titulos} />
    </div>
    <div style={{ flex: '1', marginLeft: '10px' }}>
      <Form
        schema={{ title: 'Form', type: 'object', properties: titulos }}
        validator={validator}
      />
    </div>
  </div>
</>


  );
};
export default App;
