import { useState } from "react";

const ReactForm = () => {
  const [fullname, setFullname] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const InputE1 = (obj) => {
    setFname(obj.target.value);
  };
  const InputE2 = (obj) => {
    setLname(obj.target.value);
  };
  const OnSubmitEvent = (obj) => {
    obj.preventDefault();
    setFullname(fname + " " + lname);
  };
  const ResetForm = () => {
    setFullname("");
    setFname("");
    setLname("");
  };
  return (
    <>
      <div className="main-box">
        <h1>Welcome {fullname} </h1>
        <form onSubmit={OnSubmitEvent}>
          <input
            type="text"
            placeholder="Enter your first name"
            value={fname}
            onChange={InputE1}
            required
          ></input>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lname}
            onChange={InputE2}
            required
          ></input>
          <button type="submit">submit me 👍</button>
          <button type="reset" onClick={ResetForm}>
            reset 🔙
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactForm;
