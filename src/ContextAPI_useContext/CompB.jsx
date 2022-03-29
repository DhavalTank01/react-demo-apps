import React, { useContext } from "react";
import CompC from "./CompC";
import { fname, lname } from "./CompA";
const CompB = () => {
  // use context
  // context = useContext(contextValue);
  const fn = useContext(fname);
  const ln = useContext(lname);
  return (
    <>
      <CompC />
      <h2>
        Hii, {fn} {ln}{" "}
      </h2>
    </>
  );
};
export default CompB;
