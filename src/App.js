import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThermostatCard from './components/ThermostatCard';
import Home from './pages/Home';
import Services from './pages/Services';
import Entertainment from './pages/Entertainment';
import SmartLoftPage from './pages/SmartLoftPage';
import SmartLightsPage from './pages/SmartLightsPage';
import QuotesPage from './pages/QuotesPage';
import WelcomeScreen from './components/WelcomeScreen';
import SmartLightCard from './components/SmartLightCard';
import AnimationPage from './pages/AnimationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/thermostat" element={<ThermostatCard />} />
        <Route path="/smart-light" element={<SmartLightCard />} />
        <Route path="/smart-loft" element={<SmartLoftPage />} />
        <Route path="/smart-lights" element={<SmartLightsPage />} />
        <Route path="/quotes-page" element={<QuotesPage />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<AnimationPage />} />
      </Routes>
    </Router>
  );
}
export default App;
