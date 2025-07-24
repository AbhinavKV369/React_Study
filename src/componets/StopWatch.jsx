import React from "react";

function StopWatch() {
  return (
    <>
      <div className="stop-watch">
        <div className="display">
          <h2>Stop Watch</h2>
          <div className="time">
            <span className="hours">00</span>:
            <span className="minutes">00</span>:
            <span className="seconds">00</span>
          </div>
          <div className="buttons">
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
