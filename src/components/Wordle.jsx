import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

export default function Wordle ({ solution }) {

  //destructuring what we need from the hook
  const { currentGuess, handleKeyup, guesses, turn, isCorrect, usedKeys } = useWordle(solution);
  const [input, setInput] = useState('');

  // Handling physical keyboard input, use regular expression to filter non letters
  const handleKeyPress = (event) => {
    const keyPressed = event.key
    const isAlpha = /^[a-zA-Z]$/;
    // if it is a letter, add it to the hook
    if (isAlpha.test(keyPressed)) {
      const temp = input + keyPressed
      setInput(temp);
    }

    // TODO:
    //check for duplicate words

  };

  //event listener for key events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input])
  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard input={input} setInput={setInput} usedKeys={usedKeys} />
    </div>
  )
}

