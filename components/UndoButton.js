import React from 'react';

export default function UndoButton( { onUndoClick } ){
  return(
    <div className="undo-button button">
      <button onClick={() => { onUndoClick() } } >
        UNDO LAST SHOT
      </button>
    </div>
  )
}