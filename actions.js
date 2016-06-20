export const BALL_POT = 'BALL_POT';
export const SUBMIT_BREAK = 'SUBMIT_BREAK';
export const UNDO_LAST_SHOT = 'UNDO_LAST_SHOT';

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

export function undoLastShot(){
  return {
    type: 'UNDO_LAST_SHOT'
  }
}