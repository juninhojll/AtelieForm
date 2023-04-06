import React, { useState } from "react";

function ListContainer() {

    const [textValue, setTextValue] = useState("");
    const [selectValue, setSelectValue] = useState("");
  
    const handleTextChange = (event) => {
      setTextValue(event.target.value);
    };
  
    const handleSelectChange = (event) => {
    };
  
    const handleButtonClick1 = () => {
      // código a ser executado quando o botão 1 for clicado
    };
  
    const handleButtonClick2 = () => {
      // código a ser executado quando o botão 2 for clicado
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <label>
          Texto:
          <input type="text" value={textValue} onChange={handleTextChange} />
        </label>
        <br />
        <label>
          Seletor:
          <select value={selectValue} onChange={handleSelectChange}>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
          </select>
        </label>
        <br />
        <button onClick={handleButtonClick1}>Botão 1</button>
        <button onClick={handleButtonClick2}>Botão 2</button>
      </div>
    );
  }

export default ListContainer