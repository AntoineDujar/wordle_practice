import React from 'react'

const Keyboard = (props) => {
  let alphabet = [];
  for (let i = 97; i <= 122; i++) {
      alphabet.push(String.fromCharCode(i));
  }

  return (
    <>
      <div>Keyboard</div>
      {alphabet.map((letter) =>
        <button>{letter}</button>
      )}
      
    </>
  )
}

export default Keyboard