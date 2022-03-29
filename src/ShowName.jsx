import React, { useState } from "react";

const ShowName = () => {
  const [uname, setName] = useState("");
  const InputEvent1 = (obj) => {
    setName(obj.target.value);
  };
  const [fullname, setFullName] = useState(uname);
  const showName = () => {
    //   let data = document.getElementById("uname").value;
    setFullName("hello " + uname);
  };
  return (
    <>
      <div className="main-box">
        <h1>
          <span> {fullname} </span>
        </h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={InputEvent1}
          value={uname} id="uname"
        />
        <button onClick={showName}>click me 👍</button>
      </div>
    </>
  );
};

export default ShowName;
