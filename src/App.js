import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Cards from './components/card/Cards';
import GridCards from './components/grid/GridCards';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Cards />
      <GridCards />
    </div>
  );
}

export default App;
