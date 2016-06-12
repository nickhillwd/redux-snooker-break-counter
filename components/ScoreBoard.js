import React, { PropTypes } from 'react';

const ScoreBoard = ( {currentBreak} ) => (
  console.log(currentBreak),
  <div className="break-display">
    <h1>{ currentBreak }</h1>
  </div>
);

ScoreBoard.propTypes = {
  currentBreak: PropTypes.array.isRequired
};

export default ScoreBoard;