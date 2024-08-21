import React, { useState } from "react";
import "./App.css";
import ItemForm from "./ItemForm";
import ItemListData from "./ItemListData";
import SearchInput from "./SearchInput";

function SearchAndListItems() {
  const [serach, SetSearch] = useState("");
  const [items, setItem] = useState([]);
  const handleInputSearch = (e) => {
    SetSearch(e);
  };
  const addItem = (item) => {
    setItem([...items, item]);
  };
  const filterdItems = items.filter((item) =>
    item.toLowerCase().includes(serach.toLowerCase())
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>List Items</h1>
      </header>
      <SearchInput onSearch={handleInputSearch} />
      <ItemForm onAddItem={addItem} />
      <ItemListData items={filterdItems} />
    </div>
  );
}

export default SearchAndListItems;
