import React, {propTypes} from 'react';

const ScoreBoard = ( {score} ) => (
  <div className="break-display">
    <h1>{ score }</h1>
  </div>
);

ScoreBoard.propTypes = {
  score: proptypes.number.isRequired
};

export default ScoreBoard;