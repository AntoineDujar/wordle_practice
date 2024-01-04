import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';

const Keyboard = (props) => {
  const [input, setInput] = useState('');

  const qwertyKeyboard = {
    row0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    row1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    row2: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  };

  const handleKeyPress = (event) => {
    const keyPressed = event.key
    const isAlpha = /^[a-zA-Z]$/;
    if (isAlpha.test(keyPressed)) {
      const temp = input + keyPressed
      setInput(temp);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);


  return (
    <>
      <p>keyboard input: {input}</p>
      {qwertyKeyboard.row0.map((letter) =>
        <button key={letter} onClick={()=>{setInput(input+letter)}}>{letter}</button>
      )}
      {qwertyKeyboard.row1.map((letter) =>
        <button key={letter} onClick={()=>{setInput(input+letter)}}>{letter}</button>
      )}
      {qwertyKeyboard.row2.map((letter) =>
        <button key={letter} onClick={()=>{setInput(input+letter)}}>{letter}</button>
      )}
      <button onClick={()=>{setInput('')}}>reset</button>
    </>
  )
}

export default Keyboard