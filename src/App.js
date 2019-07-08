import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SingleCard from './components/card/SingleCard';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <SingleCard />
    </div>
  );
}

export default App;
