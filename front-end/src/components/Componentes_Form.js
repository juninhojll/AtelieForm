import React, { useState } from "react";

function Componentes_Form(props) {

    const [textValue, setTextValue] = useState("");
    const [selectValue, setSelectValue] = useState("");

    const handleTextChange = (event) => {
        setTextValue(event.target.value);
        console.log(event.target.value)
    };

    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };

    const handleButtonClick1 = () => {
        console.log(props.IsSubSection)
        // código a ser executado quando o botão 1 for clicado
    };

    const handleButtonClick2 = () => {
        // código a ser executado quando o botão 2 for clicado
    };

    const handleButtonClick3 = () => {
        // código a ser executado quando o botão 2 for clicado
    };

    const handleButtonClick4 = () => {
        // código a ser executado quando o botão 2 for clicado
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <input type="text" value={textValue} onChange={handleTextChange} />
            <label>
                Seletor:
                <select value={selectValue} onChange={handleSelectChange}>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                </select>
            </label>

            {props.isSection && (
                <div>
                    <button onClick={handleButtonClick1}>+ Seção</button>
                    <button onClick={handleButtonClick2}>+ Sub Seção</button>
                    <button onClick={handleButtonClick3}>+ Campo</button>
                    <button onClick={handleButtonClick4}>Remover</button>
                </div>
            )}

            {props.IsSubSection && (
                <div>
                    <button onClick={handleButtonClick3}>+ Campo</button>
                    <button onClick={handleButtonClick4}>Remover</button>
                </div>
            )}

            {props.IsField && (
                <div>
                    <button onClick={handleButtonClick4}>Remover</button>
                </div>
            )}





        </div>
    );
}

export default Componentes_Form