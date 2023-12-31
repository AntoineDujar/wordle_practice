import React from 'react';
import Row from './Row';

export default function Grid({guesses, currentGuess, turn}) {
  return (
    <div>
      {/*map over rows */ }
      {guesses.map((guess, index) => {
        return <Row key={index} />
      })}
    </div>
  )
}
