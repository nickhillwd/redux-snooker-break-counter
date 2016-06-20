import React from 'react';
import ScoreBoardContainer from '../containers/ScoreBoardContainer';
import SnookerBallsContainer from '../containers/SnookerBallsContainer';
import SubmitBreakContainer from '../containers/SubmitBreakContainer';
import StatsContainer from '../containers/StatsContainer';
import UndoButtonContainer from '../containers/UndoButtonContainer';

const App = () => (
  <div>
    <ScoreBoardContainer />
    <SnookerBallsContainer />
    <SubmitBreakContainer />
    <UndoButtonContainer />
    <StatsContainer />
  </div>
);

export default App;