import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, updateItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterText, setFilterText] = useState("");
  const [itemName, setItemText] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");


  const itemsToDisplay = items.filter((item) => {
    if (filterText !== "") return item.name.includes(filterText);
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
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
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
