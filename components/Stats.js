import React from 'react';

export default function Stats( { lastBreak } ){
  return(
    <div className="stats-centre">
      <h3>Last Break: { lastBreak }</h3>
    </div>
  )
}