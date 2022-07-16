import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {

  const [state, setState]=useState(0);

  return(
    <form>
      <label>Hello</label>
      <input type='text' value={state} onChange={(e)=>setState(e.target.value)}/>
      <label>{state}</label>
    </form>
  );
}

export default App;
