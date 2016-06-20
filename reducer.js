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
      // ILLEGAL SHOTS;
      //pot red ball first to begin a break
      if(state.lastBallPotted === null && action.ballColour !== "red" ) {
        alert("You must pot a red to begin a break");
        // break;
      }
      //not allow 2 colours in a row
      else if(state.lastBallPotted !== "red" && action.ballColour !== "white" && action.ballColour !== "red"){
        alert("You cannot pot two colours in a row, must be a red ball");
        // break;
      }
      //not allow 2 reds in a row
      else if(state.lastBallPotted === "red" && action.ballColour === "red"){
        alert("You must pot a colour next or it's a foul");
        // break;
      }
        else if(action.ballColour === "white"){
        alert("Foul ball");
      }
      // LEGAL SHOTS;
      //record legal pot of a red ball
      // else if(state.lastBallPotted === null || state.lastBallPotted !== "red" && action.ballColour !== "white"){
      //   newState.currentBreak += action.value;
      //   if(action.ballColour === "red") newState.redBallCount -= 1;
      //   newState.lastBallPotted = action.ballColour;
      //   return newState
      // }
      // //record the legal pot
      // else if(state.lastBallPotted === "red" && action.ballColour !== "red" && action.ballColour !== "white"){
      //   newState.currentBreak += action.value;
      //   newState.lastBallPotted = action.ballColour;
      //   return newState;
      // }
        //record the legal pot
      else{
        newState.currentBreak += action.value;
        if(action.ballColour === "red") newState.redBallCount -= 1;
        newState.lastBallPotted = action.ballColour;
        return newState;
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
      newState.lastBallPotted = null;
      return newState;
    }

    default:
      return newState;
  }

}