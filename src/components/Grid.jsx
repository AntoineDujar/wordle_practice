import React from 'react';
import Row from './Row';

export default function Grid({guesses, currentGuess, turn}) {
  return (
    <div>
      {/*map over rows */ }
      {guesses.map((guess, index) => {

        //use current row to render current guess
        if(turn === index){
          return <Row key={index} currentGuess={currentGuess} />
        }

        //render past guesses on past rows
        return <Row key={index} guess={guess} />
      })}
    </div>
  )
}
