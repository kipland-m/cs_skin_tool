// components/Home.js
import React from 'react';

const importAll = (r) => r.keys().map(r);

// Create a context for images in the 'src/images' directory with the '.webp' extension
const imageContext = require.context('../images/ak47', false, /\.(webp)$/);

// Use the importAll function to create an array of imported image objects
const imageArray = importAll(imageContext);


/* This Function Handles the logic for the landing page, displaying all the weapons
  and containing the logic to link to each weapon's skin repository*/
const WeaponDisplay = ({ images }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '320px', height: '240px', margin: '10px', cursor: 'pointer' }}
          />
      ))}
    </div>
  );
};

const AK47 = () => {
  return (
  <WeaponDisplay images={imageArray}/>
  );
};

export default AK47;
