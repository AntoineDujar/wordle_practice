import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';

const Keyboard = (props) => {
  // keyboard input from onscreen and physical
  const [input, setInput] = useState('');

  const row0 = {
    id: 0,
    content: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  }
  const row1 = {
    id: 1,
    content: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  }
  const row2 = {
    id: 2,
    content: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  }
  // const row0 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  // const row1 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  // const row2 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  const qwertyKeyboard = [row0, row1, row2]

  // Handling physical keyboard input, use regular expression to filter non letters
  const handleKeyPress = (event) => {
    const keyPressed = event.key
    const isAlpha = /^[a-zA-Z]$/;
    // if it is a letter, add it to the hook
    if (isAlpha.test(keyPressed)) {
      const temp = input + keyPressed
      setInput(temp);
    }
  };

  // useEffect to listen to keyboard inputs
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);


  return (
    <>
      <p>keyboard input: {input}</p>
      
      {qwertyKeyboard.map((row) => (
        <div key={row.id}>
          {row.content.map((letter) => (
            <button key={letter} onClick={() => setInput(input + letter)}>
              {letter}
            </button>
          ))}
        </div>
      ))}
      <button onClick={()=>{setInput('')}}>reset</button>
    </>
  )
}

export default Keyboard