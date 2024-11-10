import React from "react";

function Search({ searchTerm, onSearchChange }) {
  function handleChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

