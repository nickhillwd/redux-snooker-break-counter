import deepFreeze from 'deep-freeze';
import _ from 'lodash';

export const initialState = {
  currentBreak: 0,
  lastBallPotted: null,
  redBallCount: 15,
  lastBreak: 0
};

export default function scoreBoardReducer (state = initialState, action){

  deepFreeze(state);
  var newState = _.cloneDeep(state);

  switch(action.type){

    case 'BALL_POT':
    {
      if(state.lastBallPotted === null && action.ballColour !== "red" ){
        alert("You must pot a red to begin");
        // return newState; I don't think i want to do anything with the state here
      }else{
        newState.currentBreak += action.value;
        newState.lastBallPotted = action.value;
        if (action.value === 1) newState.redBallCount -= 1;
        if (state.redBallCount === 0) alert("Now on to the colours - no more reds left!");
      }
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