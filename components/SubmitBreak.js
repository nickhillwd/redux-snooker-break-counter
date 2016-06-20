import React from 'react';

export default function SubmitBreak( { currentBreak, onSubmitBreak } ){
  return(
    <div className="submit-button button">
      <button onClick={() => { onSubmitBreak(currentBreak) } } >
        SUBMIT BREAK
      </button>
    </div>
  );
}