// App.js
import React from 'react';
import SmartLightCard from './components/SmartLightCard';
import ThermostatCard from './components/ThermostatCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <SmartLightCard />
        <ThermostatCard />
      </div>
    </div>
  );
}

export default App;
