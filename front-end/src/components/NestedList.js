import React, { useState } from 'react';
import AddButton from './AddButton';

function NestedList({ listItems }) {
  const [items, setItems] = useState(listItems || []);

  const addItem = (isList) => {
    console.log(listItems)
    const newItem = {
      isList,
      children: [],
    };
    setItems([...items, newItem]);
  };

  const addSubItem = (index, isList) => {
    const newItem = {
      isList,
      children: [],
    };
    const newItems = [...items];
    const parentItem = newItems[index];
    if (parentItem.isList) {
      parentItem.children.push(newItem);
      setItems(newItems);
    } else {
      console.log("Não é possível adicionar uma lista em um item");
    }
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <div>
        <AddButton onClick={() => addItem(true)} label="Lista" />
        <AddButton onClick={() => addItem(false)} label="Item" />
      </div>
      {items.map((item, index) => {
        const isList = item.isList;
        return isList ? (
          <ul key={index}>
            <li>
              {item.children.length === 0 && <span>list {index + 1}</span>}
              {item.children.length > 0 && (
                <>
                  <AddButton onClick={() => addSubItem(index, true)} label="Sublista" />
                  <AddButton onClick={() => addSubItem(index, false)} label="Subitem" />
                  <button onClick={() => removeItem(index)}>Remover</button>
                </>
              )}
            </li>
            <NestedList listItems={item.children} />
          </ul>
        ) : (
          <li key={index}>
            <span>item {index + 1}</span>
            {items.length > 0 && (
              <>
                <AddButton onClick={() => addSubItem(index, true)} label="Sublista" />
                <AddButton onClick={() => addSubItem(index, false)} label="Subitem" />
                <button onClick={() => removeItem(index)}>Remover</button>
              </>
            )}
          </li>
        );
      })}
    </div>
  );
}

export default NestedList;