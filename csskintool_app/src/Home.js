// components/Home.js
import { BrowserRouter as Link } from 'react-router-dom';
import React from 'react';

const importAll = (r) => r.keys().map(r);

// Create a context for images in the 'src/images' directory with the '.webp' extension
const imageContext = require.context('./images/vanilla', false, /\.(webp)$/);

// Use the importAll function to create an array of imported image objects
const imageArray = importAll(imageContext);

const imageNames = imageArray.map(image => {
  // Extract the filename from the full path
  const fileName = image.split('/').pop();
  const parts = fileName.split('.');
  const weaponName = parts[0];
  return weaponName;
});


/* This Function Handles the logic for the landing page, displaying all the weapons
  and containing the logic to link to each weapon's skin repository*/
const WeaponDisplay = ({ images, imageNames }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <Link key={index} to={`/weapon/${encodeURIComponent(imageNames[index])}`}>
          <img
            src={image}
            alt={`${index + 1}`}
            style={{ width: '320px', height: '240px', margin: '10px', cursor: 'pointer' }}
          />
          <div className='image-text'>{imageNames[index]}</div>
        </Link>
      ))}
    </div>
  );
};

const Home = () => {
  return (
  <WeaponDisplay images={imageArray} imageNames={imageNames}/>
  );
};

export default Home;
