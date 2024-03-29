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
    content: ['ENTER','z', 'x', 'c', 'v', 'b', 'n', 'm', 'BACKSPACE']
  }
  const qwertyKeyboard = [row0, row1, row2]

  

  return (
    <>
      {qwertyKeyboard.map((row) => (
        <div key={row.id}>
          {row.content.map((letter) => (
            <button key={letter} onClick={() => {if (letter != 'ENTER' && letter !== 'BACKSPACE' ){
              setInput(input + letter)
            } else if (letter == 'BACKSPACE') {
              setInput("Backspace")
            } else {
              setInput("Enter")
            }
            }} >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </>
  )
}

export default Keyboard