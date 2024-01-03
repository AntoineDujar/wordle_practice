import React from 'react'

const Keyboard = (props) => {
  const qwertyKeyboard = {
    row0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    row1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    row2: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
};


  return (
    <>
      <div>Keyboard</div>
      {qwertyKeyboard.row0.map((letter) =>
        <button>{letter}</button>
      )}
      {qwertyKeyboard.row1.map((letter) =>
        <button>{letter}</button>
      )}
      {qwertyKeyboard.row2.map((letter) =>
        <button>{letter}</button>
      )}
      
    </>
  )
}

export default Keyboard