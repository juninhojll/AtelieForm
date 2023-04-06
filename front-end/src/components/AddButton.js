import React from 'react';

function AddButton(props) {
  const { onClick, label } = props;

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default AddButton;