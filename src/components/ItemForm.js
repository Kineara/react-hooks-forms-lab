import React, {useState} from "react";
import { v4 as uuid } from "uuid";

<<<<<<< HEAD
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
=======
function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setCategory] = useState("Produce");

  function onNameChange(event) {
    setItemName(event.target.value);
  }

  function onCategoryChange(event) {
    setCategory(event.target.value);
  }

  function submitHandler() {
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" onChange = {onNameChange}/>
>>>>>>> refs/remotes/origin/master
      </label>

      <label>
        Category:
<<<<<<< HEAD
        <select
          name="category"
          value={itemCategory}
          onChange={onNewItemCategoryChange}
        >
=======
        <select name="category" onChange={onCategoryChange}>
>>>>>>> refs/remotes/origin/master
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
