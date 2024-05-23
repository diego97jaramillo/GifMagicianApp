import React, { useState } from 'react';

export const AddCategory = ({onNewValue}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {

    setInputValue( target.value );
  };

  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewValue(inputValue.trim())
    setInputValue('')
  };

  return (

    <form onSubmit={onSubmit}>
      <input type='text' placeholder="Ingrese la categoria a adicionar" onChange={ onInputChange }/>
    </form>
  )
};

