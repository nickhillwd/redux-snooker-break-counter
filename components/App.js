import React from 'react';
import ScoreBoardContainer from '../containers/ScoreBoardContainer';
import SnookerBallsContainer from '../containers/SnookerBallsContainer';
import SubmitBreakContainer from '../containers/SubmitBreakContainer';
import StatsContainer from '../containers/StatsContainer';

const App = () => (
  <div>
    <ScoreBoardContainer />
    <SnookerBallsContainer />
    <SubmitBreakContainer />
    <StatsContainer />
  </div>
);

export default App;