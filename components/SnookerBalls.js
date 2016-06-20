import React from 'react';

export default function BallButtons ( {onBallPot} ){
  return(
    <div className="ball-buttons">
      <button className="ball white-ball" onClick={() => { onBallPot(4, "white") }}>
        WHITE
      </button>

      <button className="ball red-ball" onClick={() => { onBallPot(1, "red") }}>
        RED
      </button>

      <button className="ball yellow-ball" onClick={() => { onBallPot(2, "yellow") }}>
        YELLOW
      </button>

      <button className="ball green-ball" onClick={() => { onBallPot(3, "green") }}>
        GREEN
      </button>

      <button className="ball brown-ball" onClick={() => { onBallPot(4, "brown") }}>
        BROWN
      </button>

      <button className="ball blue-ball" onClick={() => { onBallPot(5, "blue") }}>
        BLUE
      </button>

      <button className="ball pink-ball" onClick={() => { onBallPot(6, "pink") }}>
        PINK
      </button>

      <button className="ball black-ball" onClick={() => { onBallPot(7, "black") }}>
        BLACK
      </button>
    </div>
  );
}