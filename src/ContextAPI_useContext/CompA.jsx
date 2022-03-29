import React, { createContext } from "react";
import CompB from "./CompB";

const fname = createContext();
const lname = createContext();
const CompA = () => {
  return (
    <>
      <fname.Provider value={"Dhaval"}>
        <lname.Provider value={"Tank"}>
          <CompB></CompB>
        </lname.Provider>
      </fname.Provider>
    </>
  );
};
export default CompA;
export { fname, lname };
