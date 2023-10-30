import './App.css';
import React from 'react';
import Form from "../Form/Form";
import Card from "../Card/Card";
import Tricks from "../Tricks/Tricks"
import { useEffect, useState } from 'react';



function App() {
  const [tricks, setTricks] = useState([]) // base statae

  const getTricks = () => {
    fetch("http://localhost:3001/api/v1/tricks")
    .then(response => response.json())
    .then(data => setTricks(data))
  }

useEffect(() => {
 getTricks()
}, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
