import deepFreeze from 'deep-freeze';
import _ from 'lodash';

export const initialState = {
  currentBreak: 0,
  lastBreak: 0
};

export default function scoreBoardReducer (state = initialState, action){

  deepFreeze(state);
  var newState = _.cloneDeep(state);

  switch(action.type){

    case 'BALL_POT':
    {
      newState.currentBreak += action.value;
      return newState;
    }

    case 'SUBMIT_BREAK':
    {
      console.log(typeof action.score);
      console.log("state: ", state);
      console.log("newState: ", newState);
      newState.lastBreak = action.score;
      newState.currentBreak = 0;
      return newState;
    }

    default:
      return newState;
  }

}