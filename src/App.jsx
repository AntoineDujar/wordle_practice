import { useState, useEffect } from 'react';
import './App.css';
import { Grid, Keyboard, Row, Modal, Wordle } from './components';

function App() {

  //state to keep track of current solution
  const [solution, setSolution] = useState(null);

  useEffect(() => {
  fetch('http://localhost:3001/solutions')
    .then(res => res.json())
    .then(json =>{
      const randomSolution = json[Math.floor(Math.random() * json.length)]
      setSolution(randomSolution);
    })
  }, [setSolution])

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
