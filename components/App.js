import React from 'react';
import ScoreBoardContainer from '../containers/ScoreBoardContainer';
import SnookerBallsContainer from '../containers/SnookerBallsContainer';
import SubmitBreakContainer from '../containers/SubmitBreakContainer';

const App = () => (
  <div>
    <ScoreBoardContainer />
    <SnookerBallsContainer />
    <SubmitBreakContainer />
  </div>
);

export default App;