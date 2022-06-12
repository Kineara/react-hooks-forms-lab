import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, updateItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
<<<<<<< HEAD
  const [filterText, setFilterText] = useState("");
  const [itemName, setItemText] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
=======
  const [textSearch, setTextSearch] = useState("");


  function onItemFormSubmit(event) {
    event.preventDefault();
    return <Item name={newItem.name} category={newItem.category}/>
  }

  function handleTextSearchChange(event) {
    setTextSearch(event.target.value);
  }
>>>>>>> refs/remotes/origin/master


  const itemsToDisplay = items.filter((item) => {
<<<<<<< HEAD
    if (filterText !== "") return item.name.includes(filterText);
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
=======
    if (textSearch !== "") {
      return item.name.indexOf(textSearch) >=0;
    } else if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
>>>>>>> refs/remotes/origin/master
  });

  return (
    <div className="ShoppingList">
<<<<<<< HEAD
      <ItemForm 
        itemName={itemName}
        itemCategory={itemCategory}
        onNewItemNameChange={e => setItemText(e.target.value)}
        onNewItemCategoryChange={e => setItemCategory(e.target.value)}
        onItemFormSubmit={(newItem) => {
          updateItems([...items, newItem])
        }}
      />
      <Filter 
        onCategoryChange={e => setSelectedCategory(e.target.value)} 
        onSearchChange={e => setFilterText(e.target.value)} 
        search={filterText}
      />
=======
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleTextSearchChange} />
>>>>>>> refs/remotes/origin/master
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
