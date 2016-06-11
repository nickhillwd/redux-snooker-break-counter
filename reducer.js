export const initialState = {
  currentBreak: 0
};

function scoreBoard(state = initialState, action){
  switch(action.type) {
    case 'BALL_POT':
      return Object.assign({}, state, {
        currentBreak: state.currentBreak + action.value
      });
    default:
      return state;
  }
}

//on action we will have action.ballValue