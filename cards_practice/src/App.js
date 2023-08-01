import React, {
  useState,
  useEffect
} from 'react';
import logo from './logo.svg';
import './App.css';
import Planets from './components/planets/Planets';

function App() {
  return (
    <div className="App">
      <Planets></Planets>
    </div>
  );
}

export default App;
