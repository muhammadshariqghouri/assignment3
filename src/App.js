import React from 'react';
import './App.css';
import Prayers from './prayers';

function App() {
  return ( <div className="App">
    <header className="App-header">
      <h1> Assalam O Alaikum..! </h1>
      <Prayers prayerName="Ameen" prayerName1="ALLHAMDULILLAH"/>

      {/* <Prayers></Prayers> */}

      
    </header>
  </div>);
  
}

export default App;