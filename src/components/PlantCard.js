import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);

  // Toggles the stock status
  function handleStockToggle() {
    setInStock((prevInStock) => !prevInStock);
  }

  // Handles price change
  function handlePriceChange(event) {
    const newPrice = parseFloat(event.target.value);
    setPrice(newPrice);
    updatePrice(newPrice);
  }

  // updates the price on the server
  function updatePrice(newPrice) {
    fetch(`http://localhost:3000/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));
  }

  // Handles deleting plant
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then(() => onDeletePlant(plant.id));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price:${price}</p>
      <input
        type="number"
        step="0.01"
        value= {price}
        onChange={handlePriceChange}
      />
      <button className={inStock ? "primary" : ""} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;


