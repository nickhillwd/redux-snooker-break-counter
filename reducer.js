export const initialState = [{
  currentBreak: 0}];

function scoreBoard(state = initialState, action) {
  switch (action.type) {
    case 'BALL_POT':
      return Object.assign({}, state, {
        currentBreak: state.currentBreak + action.value
      });
    default:
      return state;
  }
}

function scoreApp(state = {}, action){
  return {
    currentBreak: [scoreBoard(state, action)]
  }
}

export default scoreApp;

//on action we will have action.ballValue
//todo refactor state ={} or needs initialState ln 15