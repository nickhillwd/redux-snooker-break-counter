export const BALL_POT = 'BALL_POT';
export const SUBMIT_BREAK = 'SUBMIT_BREAK';

export function ballPot(value, ballColour){
  return {
    type: 'BALL_POT',
    value,
    ballColour
  }
}

export function submitBreak(score){
  return {
    type: 'SUBMIT_BREAK',
    score
  };
}