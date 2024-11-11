## Plantsy

Date, 2024/11/10 By Shadrack Kipkemei

Plantsy is a simple React application where users can view, add, update, and delete plants. Users can also mark plants as "sold out" and search for plants by their name.

## Features
1. View Plants: When the app starts, all plants are displayed.

1. Add Plants: Users can add new plants to the list.

3. Mark as Sold Out: Users can mark a plant as "sold out".

4. Update Price: Users can update the price of a plant.

5. Delete Plants: Users can delete a plant from the list.

6. Search Plants: Users can search for plants by their name.

## Setup
1. Clone the repository:
git clone https://github.com/Shadrack-Kipkemei/react-hooks-cc-plantshop.git
cd plantsy

2. Install dependencies:
npm install

3. Start the JSON server:
npx json-server --watch db.json --port 6001

4. Start the React application:
npm start

## Live link
[live link ]https://cc-plantshop.netlify.app/

## Component Structure
App.js: Main component that renders the header and PlantPage.

Header.js: Header component with the app title.

PlantPage.js: Manages the state for plants, handles adding, updating, deleting plants, and searching.

NewPlantForm.js: Form component for adding new plants.

Search.js: Search component for filtering plants by name.

PlantList.js: Component for rendering a list of PlantCard components.

PlantCard.js: Component for displaying individual plant details, updating price, marking as sold out, and deleting the plant.

API Endpoints
http://localhost:6001/plants: Fetch all plants.

http://localhost:6001/plants: Add a new plant.

http://localhost:3000/plants/${plant.id}: Update plant details (e.g., price).

http://localhost:6001/plants/${plant.id}: Delete a plant.

Support and contact details https://github.com/Shadrack-Kipkemei

## License
The content of this project is licensed under the MIT license Copyright (c) 2024.