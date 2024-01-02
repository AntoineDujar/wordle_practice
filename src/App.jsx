import { useState, useEffect } from 'react';
import './App.css';
import { Grid, Keyboard, Row, Modal, Wordle } from './components';

function App() {

  //state to keep track of current solution
  const [solution, setSolution] = useState('smart')

  useEffect(() => {
  //to do
  // fetch solution 
  }, [])

  let input = ""

  return (
    <div className='App'>
      <h1>WORDLE</h1>
      <Wordle solution={solution} />
      <Keyboard input={input} />
    </div>
  )
}

export default App
