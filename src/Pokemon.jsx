import { useEffect, useState } from "react";
import axios from "axios";
const Pokemon = () => {
  const [num, SetNum] = useState(1);
  const [name, SetName] = useState();
  const [moves, SetMoves] = useState();
  const [udata, SetUdata] = useState(1);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      SetName(res.data.name);
      SetMoves(res.data.moves.length);
    }
    getData();
  });
  const SelectChange = (event) => {
    SetNum(event.target.value);
  };
  const SubmitEvent = () => {
    SetNum(udata);
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    SetUdata(event.target.value);
  };
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>My moves is {moves}</h2>
      <h3>You select {num}</h3>
      {/* <input
        value={udata}
        onChange={inputEvent}
        placeholder="Enter a number"
      ></input>
      <br></br>
      <br></br>
      <button onClick={SubmitEvent}>Submit</button> */}
      <select onChange={SelectChange} value={num}>
        {/* <option value={num}>{num}</option> */}

        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </>
  );
};

export default Pokemon;
