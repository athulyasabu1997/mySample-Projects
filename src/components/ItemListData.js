import React from 'react';

function ItemListData({ items }) {
  return (
    <ul>
     { items.map((item,index) => (
        <li key={index}>{item}</li>
      )) }
    </ul>
  );
}

export default ItemListData;
