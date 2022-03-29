import React from "react";
import { fname, lname } from "./CompA";
const CompC = () => {
  return (
    <>
      <fname.Consumer>
        {(Fname) => {
          return (
            <>
              <lname.Consumer>
                {(Lname) => {
                  return (
                    <>
                      <h1>My name is {Fname} {Lname}</h1>
                    </>
                  );
                }}
              </lname.Consumer>
            </>
          );
        }}
      </fname.Consumer>
    </>
  );
};
export default CompC;
