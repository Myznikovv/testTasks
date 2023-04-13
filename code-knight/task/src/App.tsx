import React from 'react';
import './App.css';
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="App">
      <DigitalClock timezone={'Europe/Moscow'}/>
    </div>
  );
}

export default App;
