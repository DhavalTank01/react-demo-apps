import React, { useState } from "react";

const SearchFilter = () => {
  const SResult = (props) => {
    const imgsrc = `https://source.unsplash.com/300x300/?${props.name}`;
    return (
      <>
        <img src={imgsrc} alt="search image" width="300" height="300"></img>
      </>
    );
  };
  const [sdata, SetSdata] = useState();
  const InputEvent = (event) => {
    SetSdata(event.target.value);
  };

  return (
    <>
      <div className="main_search_div">
        <input
          type="text"
          id="sq"
          placeholder="Search Here"
          name="sq"
          value={sdata}
          onChange={InputEvent}
        />
        <div className="Search_Reasult_div">
          {sdata === undefined || sdata === "" ? null : (
            <SResult name={sdata} />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
