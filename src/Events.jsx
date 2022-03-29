import React, { useState } from "react";
const Events = () => {
    
    
    const [bg, setBg] = useState("cornflowerblue");
    const [btnname, setText] = useState("click me");
  const ClickEvent = () => {      
      setBg("#8e44ab");
      setText("double click me");
  };
  
  const DoubleClick = () => {      
      setBg("#64e7ed");
      setText("click me");
  };
  return (
    <>
      <div className="mainbox" style={{background:bg}}>
        <button className="mainbtn" onClick={ClickEvent} onDoubleClick={DoubleClick}>
        { btnname }
        </button>
      </div>
    </>
  );
};

export default Events;
