import React from "react";
import "./sloatmachine.css";

const Match = (props) => {
  // object destructure
  let { a, b, c } = props;
  return (
    <>
      <div className="details">
        <p>
          {a} {b} {c}
        </p>
        <h3>This is match</h3>
      </div>
    </>
  );
};

const NotMatch = (props) => {
  // object destructure
  let { a, b, c } = props;
  return (
    <>
      <div className="details">
        <p>
          {a} {b} {c}
        </p>
        <h3>This is not match</h3>
      </div>
    </>
  );
};

const Sloat = (props) => {
  const x = props.x;
  const y = props.y;
  const z = props.z;
  if (x === y && y === z) {
    return (
      <>
        <Match a={x} b={y} c={z} />
      </>
    );
  } else {
    return (
      <>
        <NotMatch a={x} b={y} c={z} />
      </>
    );
  }
};

const SlotMachine = () => {
  return (
    <>
      <div className="title">
        <p>🎰 Welcome to <span>slot machine</span> 🎰 </p>
      </div>
      <div className="sloat_machine">
        <Sloat x="😄" y="😄" z="😄" />
        <Sloat x="😄" y="😄" z="❤️" />
        <Sloat x="❤️" y="❤️" z="❤️" />
      </div>
    </>
  );
};

export default SlotMachine;
