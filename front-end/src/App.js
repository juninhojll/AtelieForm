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
  <NestedList/>
</>


  );
};
export default App;
