import React from "react";

<<<<<<< HEAD
function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={onSearchChange}/>
=======
function Filter({ onCategoryChange , onSearchChange}) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} />
>>>>>>> refs/remotes/origin/master
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
