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
      console.log(arguments);
      newState.currentBreak += action.value;
      return newState;
    }

    case 'SUBMIT_BREAK':
    {
      console.log(arguments);
      newState.currentBreak = 0;
      newState.lastBreak = state.currentBreak;
      return newState;
    }

    default:
      return newState;
  }

}