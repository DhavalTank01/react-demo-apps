import React, { useState } from "react";
// let cnt = 0;

const Hooks = () => {
  const [cnt, setCount] = useState(0);
  const IncNum = () => {
    setCount(cnt + 1);
  };
  const DecNum = () => {
    setCount(cnt - 1);
  };

  return (
    <>
      <div className="main-box-cnt">
        <h1 className="cntnum">{cnt}</h1>
        <button className="incbtn" onClick={IncNum}>+</button>
        <button className="decbtn" onClick={DecNum}>-</button>
      </div>
    </>
  );
};

export default Hooks;
