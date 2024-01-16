import { useState } from 'react';

const useWordle = ( solution ) => {

  //our states for game logic

  //keeps track of remaining guesses, max 6
  const [turn, setTurn] = useState(0);

  //holds state for guess before user presses enter
  const [currentGuess, setCurrentGuess] = useState('');

  //an array to hold the prev guesses
  const [guesses, setGuesses] = useState([...Array(6)]);

  //array to hold prev + current guesses
  const [history, setHistory] = useState([]);

  //game over state
  const [isCorrect, setIsCorrect] = useState(false);

  //track which letters have been guessed
  const [usedKeys, setUsedKeys] = useState({});

  //methods of recurring game logic
  
  const formatGuess = (currentGuess) => {
    //spread solution into temp container
    let solutionArray = [...solution];

    //map over currentGuess letters to make them all gray
    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'gray'};
    })

    //check which letters should be green
    formattedGuess.forEach((l, index) => {
      if(solution[index] === l.key){
        formattedGuess[index].color = 'green';
        solutionArray[index] = null;
      }
    })

    //check which letters should be yellow
    formattedGuess.forEach((l, index) => {
      if(solutionArray.includes(l.key) && l.color !== 'green'){
        formattedGuess[index].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    })

    return formattedGuess

  }
  
  //adds current guess to guesses array, checks history for duplicates, calls format guess to tile colours
  const addNewGuess = (formattedGuess) => {
    
    //game over is current guess is solution
    if(currentGuess === solution){
      setIsCorrect(true);
    }

    //create 
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess;
      return newGuesses
    })

    //add current guess to history
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess];
    })

    //increment turn counter
    setTurn(prevtTurn => {
      return prevtTurn + 1;
    })

    //update used keys array for all letters in current guess
    setUsedKeys(prevUsedKeys => {

      //map over letters of guess
      formattedGuess.forEach(letter => {
        const currentColor = prevUsedKeys[letter.key]

        if(letter.color === 'green'){
          return
        }

        if(letter.color === 'yellow' && currentColor !== 'green'){
          prevUsedKeys[letter.key] = 'yellow'
          return
        }

        if(letter.color === 'gray' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[letter.key] = 'grey'
          return
        }
      })

      return prevUsedKeys
    })

    setCurrentGuess('');

    
  }
    
  
  const handleKeyup = ({ key }) => {
    if(key === 'Enter'){
      
      if(turn > 5){
        //show modal: you lost, all guesses used
      }

      if(history.includes(currentGuess)){
        //show modal: word already guessed
      }

      if(currentGuess.length !== 5){
        alert("Your current guess is too short")
        return
      }

      const formatted = formatGuess(currentGuess);
      addNewGuess(formatted);
    }
    
    if (key === 'Backspace'){
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if(/^[a-zA-z]$/.test(key)){
      if(currentGuess.length < 5){
        setCurrentGuess(prev => prev + key)
      }
    }
  }

  return {turn, currentGuess, setCurrentGuess, guesses, history, isCorrect, handleKeyup, usedKeys}
}

export default useWordle