// App.js
// Michael Ashby & Kip Melton
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import AK47 from './components/AK47';





import Weapons from './Weapons';
import './App.css';

// Function to import all images from the 'src/images' directory with the '.webp' extension
const importAll = (r) => r.keys().map(r);

// Create a context for images in the 'src/images' directory with the '.webp' extension
const imageContext = require.context('./images', false, /\.(webp)$/);

// Use the importAll function to create an array of imported image objects
const imageArray = importAll(imageContext);

const imageNames = imageArray.map(image => {
  // Extract the filename from the full path
  const fileName = image.split('/').pop();
  const parts = fileName.split('.');
  const weaponName = parts[0];
  return weaponName;
});

/*
for (const [index, weaponName] of imageNames.entries()) {
  console.log(`Weapon ${index + 1}: ${weaponName}`);
}
*/

/* This Function Handles the logic for the landing page, displaying all the weapons
  and containing the logic to link to each weapon's skin repository*/
const WeaponDisplay = ({ images, imageNames }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <Link key={index} to={`/weapon/${encodeURIComponent(imageNames[index])}`}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '320px', height: '240px', margin: '10px', cursor: 'pointer' }}
          />
          <div className='image-text'>{imageNames[index]}</div>
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

        <WeaponDisplay images={imageArray} imageNames={imageNames}/>
        
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/weapon/ak-47" exact element={<AK47/>} />
        <Route path="/weapon/aug" exact element={<AUG/>} />
        <Route path="/weapon/awp" exact element={<AWP/>} />
        <Route path="/weapon/cz75-auto" exact element={<CZ75/>} />
        <Route path="/weapon/desert-eagle" exact element={<DESERTEAGLE/>} />
        <Route path="/weapon/dual-berettas" exact element={<DUALBERETTAS/>} />
        <Route path="/weapon/famas" exact element={<FAMAS/>} />
        <Route path="/weapon/five-seven" exact element={<FIVESEVEN/>} />
        <Route path="/weapon/g3sg1" exact element={<G3SG1/>} />
        <Route path="/weapon/galil-ar" exact element={<GALIL/>} />
        <Route path="/weapon/glock-18" exact element={<GLOCK18/>} />
        <Route path="/weapon/m249" exact element={<M249/>} />
        <Route path="/weapon/m4a1-s" exact element={<M4A1/>} />
        <Route path="/weapon/m4a4" exact element={<M4A4/>} />
        <Route path="/weapon/mac-10" exact element={<MAC10/>} />
        <Route path="/weapon/mag7" exact element={<MAG7/>} />
        <Route path="/weapon/mp5-sd" exact element={<MP5/>} />
        <Route path="/weapon/mp7" exact element={<MP7/>} />
        <Route path="/weapon/mp9" exact element={<MP9/>} />
        <Route path="/weapon/negev" exact element={<NEGEV/>} />
        <Route path="/weapon/nova" exact element={<NOVA/>} />
        <Route path="/weapon/p2000" exact element={<P2000/>} />
        <Route path="/weapon/p250" exact element={<P250/>} />
        <Route path="/weapon/p90" exact element={<P90/>} />
        <Route path="/weapon/pp-bizon" exact element={<PPBIZON/>} />
        <Route path="/weapon/r8-revolver" exact element={<R8/>} />
        <Route path="/weapon/sawed-off" exact element={<SAWEDOFF/>} />
        <Route path="/weapon/scar-20" exact element={<SCAR20/>} />
        <Route path="/weapon/sg-553" exact element={<SG553/>} />
        <Route path="/weapon/ssg-08" exact element={<SSG08/>} />
        <Route path="/weapon/tec-9" exact element={<TEC9/>} />
        <Route path="/weapon/ump-45" exact element={<UMP45/>} />
        <Route path="/weapon/usp-s" exact element={<USPS/>} />
        <Route path="/weapon/xm1014" exact element={<XM1014/>} />
    
        </Routes>

      </div>
      </div>
    </Router>
  );
};

export default App;