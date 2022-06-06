import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  itemName,
  itemCategory,
  onNewItemNameChange,
  onNewItemCategoryChange,
  onItemFormSubmit,
}) {
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };

  return (
    <form
      className="NewItem"
      onSubmit={(e) => {
        e.preventDefault();
        onItemFormSubmit(newItem);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={onNewItemNameChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={onNewItemCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
