import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThermostatCard from './components/ThermostatCard';
import Home from './pages/Home';
import SmartLoftPage from './pages/SmartLoftPage';
import SmartLightsPage from './pages/SmartLightsPage';
import QuotesPage from './pages/QuotesPage';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/thermostat" element={<ThermostatCard />} />
        <Route path="/smart-loft" element={<SmartLoftPage />} />
        <Route path="/smart-lights" element={<SmartLightsPage />} />
        <Route path="/quotes-page" element={<QuotesPage />} />
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}
export default App;
