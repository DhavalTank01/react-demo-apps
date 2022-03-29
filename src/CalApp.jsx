import React from "react";
import { add, sub, mul, div } from "./calculater";

function Calculater() {
  return (
    <div>
      <ul>
        <li>Sum of two number is: {add(10, 20)} </li>
        <li>Sub of two number is: {sub(10, 5)} </li>
        <li>Sub of two number is: {sub(10, 15)} </li>
        <li>Div of two number is: {div(10, 3)} </li>
        <li>Mul of two number is: {mul(10, 3)} </li>
      </ul>
    </div>
  );
}

function Title()
{
    return (
        <h2>This is calculater using inport and export.</h2>
    )
}

export default Calculater;
export {Title};
