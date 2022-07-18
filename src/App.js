import logo from './logo.svg';
import './App.css';
import ClassComponentExample from './components/ClassComponentExample';
import HooksExample from './components/HooksExample';
import React, {useState} from 'react';


function App() {
  const [selectedId, setSelcetedId] =useState(1);
  return (
    <div className="App">
      <h1>Hello hooks</h1>

     <button onClick={() => setSelcetedId(selectedId + 1)}>Zmień id</button>

      <ClassComponentExample id={selectedId} />
      <HooksExample id={selectedId} />
    </div>
  );
}

export default App;
