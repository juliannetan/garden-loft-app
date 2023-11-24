import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThermostatCard from './components/ThermostatCard';
import SmartLightCard from './components/SmartLightCard';
import Home from './pages/Home';
import SmartLoftPage from './pages/SmartLoftPage';
// import { ThemeProvider } from 'styled-components';
// import styled from './themes/styled';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smart-lights" element={<SmartLightCard />} />
        <Route path="/thermostat" element={<ThermostatCard />} />
        <Route path="/smart-loft" element={<SmartLoftPage />} />
      </Routes>
    </Router>
  );
}
export default App;
