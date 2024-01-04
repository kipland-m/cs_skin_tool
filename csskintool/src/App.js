// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Weapons from './Weapons';
import './App.css'; // Import the CSS file for styling

// Function to import all images from the 'src/images' directory with the '.webp' extension
const importAll = (r) => r.keys().map(r);

// Create a context for images in the 'src/images' directory with the '.webp' extension
const imageContext = require.context('./images', false, /\.(webp)$/);

// Use the importAll function to create an array of imported image objects
const imageArray = importAll(imageContext);

/* This Function Handles the logic for the landing page, displaying all the weapons
  and containing the logic to link to each weapon's skin repository*/
const WeaponDisplay = ({ images }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (

        <img
          key={index}
          src={image} // Using .default to access the imported image URL
          alt={`Image ${index + 1}`}
          style={{ width: '100px', height: '100px', margin: '5px' }}
        />

      ))}
    </div>
  );
};


const App = () => {

  return (
    <Router>
      <div className='App'>
      <div>

        <h1>CS2 SKIN TOOL</h1>
        <WeaponDisplay images={imageArray} />



      </div>
      </div>
    </Router>
  );
};

export default App;