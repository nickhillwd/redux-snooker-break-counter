import React from 'react';

export default function BallButtons ( {onBallPot} ){
  return(
    <div className="ball-buttons">
      <button className="ball white-ball" onClick={() => { onBallPot(4) }}>
        WHITE
      </button>

      <button className="ball red-ball" onClick={() => { onBallPot(1) }}>
        RED
      </button>

      <button className="ball yellow-ball" onClick={() => { onBallPot(2) }}>
        YELLOW
      </button>

      <button className="ball green-ball" onClick={() => { onBallPot(3) }}>
        GREEN
      </button>

      <button className="ball brown-ball" onClick={() => { onBallPot(4) }}>
        BROWN
      </button>

      <button className="ball blue-ball" onClick={() => { onBallPot(5) }}>
        BLUE
      </button>

      <button className="ball pink-ball" onClick={() => { onBallPot(6) }}>
        PINK
      </button>

      <button className="ball black-Ball" onClick={() => { onBallPot(7) }}>
        BLACK
      </button>
    </div>
  );
}