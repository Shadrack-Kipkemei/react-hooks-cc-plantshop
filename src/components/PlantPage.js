import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Function to add a new plant to the state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Function to update the search term in the state
  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  // Function to update an existing plant in the state
  function handleUpdatePlant(updatedPlant) {
    setPlants((plants) =>
      plants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  }

  // Function to delete a plant from the state
  function handleDeletePlant(id) {
    setPlants((plants) => plants.filter((plant) => plant.id !== id));
  }

  // Filter plants based on the search term
  const plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PlantList
        plants={plantsToDisplay}
        onUpdatePlant={handleUpdatePlant}
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
