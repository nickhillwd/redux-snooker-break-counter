import React from 'react';

export default function ScoreBoard( { currentBreak } ){
  return(
    <div className="break-display">
      <h1>{ currentBreak }</h1>
    </div>
  )
}