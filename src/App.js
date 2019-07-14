import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Cards from './components/card/Cards';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
