import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';

const Keyboard = ({ input, setInput }) => {

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
  const qwertyKeyboard = [row0, row1, row2]

  

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