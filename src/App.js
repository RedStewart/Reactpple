import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SingleCard from './components/card/SingleCard';
import Cards from './components/card/Cards';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Cards />
      <SingleCard />
      <SingleCard />
    </div>
  );
}

export default App;
