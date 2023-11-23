// App.js
import React from 'react';
import SmartLightCard from '../components/SmartLightCard';
import ThermostatCard from '../components/ThermostatCard';
import './SmartLoftPage.css';

function SmartLoftPage() {
  return (
    <div className="App">
      <div className="card-container">
        <SmartLightCard />
        <ThermostatCard />
      </div>
    </div>
  );
}

export default SmartLoftPage;

// // HomePage.js
// import React from 'react';
// import './SmartLoftPage.css';
// import Carousel from '../components/Carousel';
// import SmartLightCard from '../components/SmartLightCard';
// import ThermostatCard from '../components/ThermostatCard';

// const SmartLoftPage = () => {
//   const cards = [ThermostatCard, ThermostatCard, ThermostatCard, ThermostatCard, SmartLightCard];

//   return (
//     <div>
//       <h1>Smart Home Interface</h1>
//       <Carousel cards={cards} />
//     </div>
//   );
// };

// export default SmartLoftPage;
