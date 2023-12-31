import { useState } from 'react';

const useWorldle = ({solution}) => {

  //our variables for the macro wordle component

  //keeps track of remaining guesses, max 6
  const [turn, setTurn] = useState(0);

  //holds state for guess before user presses enter
  const [currnetGuess, setCurrnetGuess] = useState('');

  //an array to hold the prev guesses
  const [guesses, setGuesses] = useState([]);

  //array to hold prev + current guesses
  const [history, setHistory] = useState([]);

  //game over state
  const [isCorrect, setIsCorrect] = useState(false);

  //methods of recurring game logic
  
  const formatGuess = {
    //TO DO>
    //function to format guess and determine colour of tile
  }
  
  const addNewGuess = {
    //TO DO:
    //function to add new guess to guesses array and update history, increment turn counter and check isCorrect
  }
  
  const handleKeyup = {
    //TO DO:
    //function to handle key events, track current guess, trigger addNewGuess
  }

  return {turn, currnetGuess, guesses, history, isCorrect, handleKeyup}
}

export default useWorldle;