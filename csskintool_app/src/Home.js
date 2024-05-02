// HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get('/api/weapons/');
        setWeapons(response.data);
      } catch (error) {
        console.error('Error fetching weapons:', error);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <div>
      <h1>Weapons</h1>
      <div>
        {weapons.map(weapon => (
          <div key={weapon.id}>
            <h2>{weapon.name}</h2>
            <img src={`http://localhost:8000${weapon.image}`} alt={weapon.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
