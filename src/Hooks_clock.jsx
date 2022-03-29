import React , { useState } from "react";

const Hooks_clock = () => {
  let time = new Date().toLocaleTimeString();
  const [ntime, SetTime] = useState(time);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    SetTime(time);
  };

  return (
    <>
      <div className="clockbox">
        <h1 className="time_show">{ntime}</h1>
        <button className="refresh_btn" onClick={UpdateTime}>
          get  time
        </button>
      </div>
    </>
  );
};

export default Hooks_clock;