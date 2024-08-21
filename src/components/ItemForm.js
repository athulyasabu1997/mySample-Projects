import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState('');

 const handleSubmit = (e) => {
e.preventDefault()
if(inputValue.trim()){
  onAddItem(inputValue)  
  setInputValue('')
}
 }

  return (
 <form onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='Add list'
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value) }/>
    <button type='submit'>Add</button>
 </form>
  );
}

export default ItemForm;
