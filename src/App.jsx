import React from 'react';
import WeatherReport from './components/WeatherReport';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6">      
      <WeatherReport />
    </div>
  );
}

export default App;
