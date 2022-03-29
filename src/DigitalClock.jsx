import { useState } from "react";

const DigitalClock = () => {
  let ctime = new Date().toLocaleTimeString();
  const [ntime, setTime] = useState(ctime);
  const UpdateTime = () => {
    let ctime = new Date().toLocaleTimeString();
    setTime(ctime);
  };
  setInterval(UpdateTime);
  return (
    <>
      <div className="clockbox">
        <h1 className="time_show">{ntime}</h1>
      </div>
    </>
  );
};

export default DigitalClock;
