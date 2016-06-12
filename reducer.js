// export const initialState = [{
//   currentBreak: 0}];
//
// function scoreBoardReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'BALL_POT':
//       return Object.assign({}, state, {
//         currentBreak: state.currentBreak + action.value
//       });
//     default:
//       return state;
//   }
// }
//
// function scoreApp(state = {}, action){
//   return {
//     currentBreak: [scoreBoard(state, action)]
//   }
// }
//
// export default scoreApp;
//
// //on action we will have action.ballValue
// //todo refactor state ={} or needs initialState ln 15
//

import deepFreeze from 'deep-freeze';
import _ from 'lodash';

export const initialState = {
  currentBreak: 0
};

export default function scoreBoardReducer (state = initialState, action){

  deepFreeze(state);
  var newState = _.cloneDeep(state);

  switch(action.type){
    case 'BALL_POT':
      newState.currentBreak += action.value;
      return newState;
    default:
      return newState;
  }


}