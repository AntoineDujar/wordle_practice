import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

export default function Wordle ({ solution }) {

  //destructuring what we need from the hook
  const { currentGuess, handleKeyup, guesses, turn, usedKeys } = useWordle(solution);

  // Handling physical keyboard input, use regular expression to filter non letters
  /*const handleKeyPress = (event) => {
    const keyPressed = event.key
    const isAlpha = /^[a-zA-Z]$/;
    // if it is a letter, add it to the hook
    if (isAlpha.test(keyPressed)) {
      const temp = input + keyPressed
      setInput(temp);
    }

    // TODO:
    //check if enter press
    // if so, addNewGuess
    //check length of word
    //guess appears on current row
    //check for duplicate words

  };*/

  //event listener for key events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyup);

    return () => {
      document.removeEventListener('keydown', handleKeyup);
    };
  }, [handleKeyup])
  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard /*input={input} setInput={setInput}*/ usedKeys={usedKeys} />
    </div>
  )
}

