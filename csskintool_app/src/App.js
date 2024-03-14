// App.js
// Michael Ashby & Kip Melton
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

import AK47 from './components/AK47';
import AUG from './components/AUG';
import AWP from './components/AWP';
import CZ75 from './components/CZ75';
import DESERTEAGLE from './components/DESERTEAGLE';
import DUALBERETTAS from './components/DUALBERETTAS';
import FAMAS from './components/FAMAS';
import FIVESEVEN from './components/FIVESEVEN';
import G3SG1 from './components/G3SG1';
import GALIL from './components/GALIL';
import GLOCK18 from './components/GLOCK18';
import M4A1 from './components/M4A1';
import M4A4 from './components/M4A4';
import M249 from './components/M249';
import MAC10 from './components/MAC10';
import MAG7 from './components/MAG7';
import MP5 from './components/MP5';
import MP7 from './components/MP7';
import MP9 from './components/MP9';
import NEGEV from './components/NEGEV';
import NOVA from './components/NOVA';
import P90 from './components/P90';
import P250 from './components/P250';
import P2000 from './components/P2000';
import PPBIZON from './components/PPBIZON';
import R8 from './components/R8';
import SAWEDOFF from './components/SAWEDOFF';
import SCAR20 from './components/SCAR20';
import SG553 from './components/SG553';
import SSG08 from './components/SSG08';
import TEC9 from './components/TEC9';
import UMP45 from './components/UMP45';
import USPS from './components/USPS';
import XM1014 from './components/XM1014';

const App = () => {

  return (
    <Router>
      <div className='App'>
      <div>

        <h1>
        <Link to="/">CS2 SKIN TOOL</Link>
        </h1>

        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/weapon/ak-47" element={<AK47/>} />
        <Route path="/weapon/aug" element={<AUG/>} />
        <Route path="/weapon/awp" element={<AWP/>} />
        <Route path="/weapon/cz75-auto" element={<CZ75/>} />
        <Route path="/weapon/desert-eagle" element={<DESERTEAGLE/>} />
        <Route path="/weapon/dual-berettas" element={<DUALBERETTAS/>} />
        <Route path="/weapon/famas" element={<FAMAS/>} />
        <Route path="/weapon/five-seven" element={<FIVESEVEN/>} />
        <Route path="/weapon/g3sg1" element={<G3SG1/>} />
        <Route path="/weapon/galil-ar" element={<GALIL/>} />
        <Route path="/weapon/glock-18" element={<GLOCK18/>} />
        <Route path="/weapon/m249" element={<M249/>} />
        <Route path="/weapon/m4a1-s" element={<M4A1/>} />
        <Route path="/weapon/m4a4" element={<M4A4/>} />
        <Route path="/weapon/mac-10" element={<MAC10/>} />
        <Route path="/weapon/mag-7" element={<MAG7/>} />
        <Route path="/weapon/mp5-sd" element={<MP5/>} />
        <Route path="/weapon/mp7" element={<MP7/>} />
        <Route path="/weapon/mp9" element={<MP9/>} />
        <Route path="/weapon/negev" element={<NEGEV/>} />
        <Route path="/weapon/nova" element={<NOVA/>} />
        <Route path="/weapon/p2000" element={<P2000/>} />
        <Route path="/weapon/p250" element={<P250/>} />
        <Route path="/weapon/p90" element={<P90/>} />
        <Route path="/weapon/pp-bizon" element={<PPBIZON/>} />
        <Route path="/weapon/r8-revolver" element={<R8/>} />
        <Route path="/weapon/sawed-off" element={<SAWEDOFF/>} />
        <Route path="/weapon/scar-20" element={<SCAR20/>} />
        <Route path="/weapon/sg-553" element={<SG553/>} />
        <Route path="/weapon/ssg-08" element={<SSG08/>} />
        <Route path="/weapon/tec-9" element={<TEC9/>} />
        <Route path="/weapon/ump-45" element={<UMP45/>} />
        <Route path="/weapon/usp-s" element={<USPS/>} />
        <Route path="/weapon/xm1014" element={<XM1014/>} />
    
        </Routes>

      </div>
      </div>
    </Router>
  );
};

export default App;