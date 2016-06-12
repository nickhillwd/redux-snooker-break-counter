import React from 'react';

export default function SubmitBreak( { onSubmitBreak } ){
  return(
    <div className="submit-button">
      <button onClick={() => { onSubmitBreak() } } >
        SUBMIT BREAK
      </button>
    </div>
  );
}