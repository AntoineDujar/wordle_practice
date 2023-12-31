import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';

export default function Wordle ({ solution }) {

  //destructuring what we need from the hook
  const { currentGuess, handleKeyup, guesses, turn, isCorrect } = useWordle(solution);

  useEffect(() => {
    //add event listener for keyup
    //trigger handle keyup
  }, [])
  return (
    <div>
      {/*<div>Current Guess - {currentGuess}</div>*/}
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  )
}

