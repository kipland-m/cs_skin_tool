import React from 'react';

// This function imports all images from the specified context
const importAll = (r) => r.keys().map(r);

const imageContext = require.context('/src/images/fiveseven', false, /\.(png)$/);
const imageArray = importAll(imageContext);


const imageNames = imageArray.map(image => {
  // Extract the filename from the full path
  const fileName = image.split('/').pop();
  const parts = fileName.split('.');
  const weaponName = parts[0];
  return weaponName;
});

const WeaponDisplay = ({ images }) => {
  console.log(images); // Add this line for debugging
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images && images.map((image, index) => (
        <img
          key={index}
          src={image} // Assuming each image object has a 'default' property containing the image URL
          alt={`${index + 1}`}
          style={{ width: '320px', height: '240px', margin: '10px', cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

const Weapons = () => {
  return (
  <WeaponDisplay images={imageArray} imageNames={imageNames}/>
  );
};

export default Weapons;