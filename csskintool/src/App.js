// App.js
// Michael Ashby & Kip Melton
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Weapons from './Weapons';
import './App.css';

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
        <Link key={index} to={`/image/${index + 1}`}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            // 4:3 aspect ratio
            style={{ width: '320px', height: '240px', margin: '10px', cursor: 'pointer' }}
          />
        <div className='image-text'>test</div>
        </Link>
      ))}
    </div>
  );
};


const App = () => {

  return (
    <Router>
      <div className='App'>
      <div>

        <h1>
        <Link to="/">CS2 SKIN TOOL</Link>
        </h1>

        <WeaponDisplay images={imageArray}/>
        
        <Routes>
        <Route path="/" exact element={<Home/>} />
        </Routes>

      </div>
      </div>
    </Router>
  );
};

export default App;