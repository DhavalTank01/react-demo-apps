import { useState } from "react";

const ReactForm = () => {
  const [fullname, SetFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const InputEvent = (obj) => {
    const value = obj.target.value;
    const name = obj.target.name;

    SetFullname((preVal) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preVal.lname,
          email: preVal.email,
          phone: preVal.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preVal.fname,
          lname: value,
          email: preVal.email,
          phone: preVal.phone,
        };
      } else if (name === "Email") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: value,
          phone: preVal.phone,
        };
      }
       else if (name === "phone") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: preVal.email,
          phone: value,
        };
      }
    });
  };
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const OnSubmitEvent = (obj) => {
    obj.preventDefault();
    alert("Form is submitted.");
    setDetails({
      fname: fullname.fname,
      lname: fullname.lname,
      email: fullname.email,
      phone: fullname.phone,
      message:"Form is submitted."
    });
  };
  const ResetForm = () => {
    SetFullname(() => {
      return {
        fname: "",
        lname: "",
        email: "",
        phone: "",
      };
    });
    setDetails(() => {
      return {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      };
    });
  };
  return (
    <>
      <div className="main-box">
        <h1>
          Welcome {details.fname} {details.lname}
        </h1>
        <h3> {details.email}</h3>
        <h3> {details.phone}</h3>
        <h4>{details.message}</h4>
        <form onSubmit={OnSubmitEvent}>
          <input
            type="text"
            placeholder="Enter your first name"
            value={fullname.fname}
            onChange={InputEvent}
            required
            name="fName"
          ></input>
          <input
            type="text"
            placeholder="Enter your last name"
            value={fullname.lname}
            onChange={InputEvent}
            required
            name="lName"
          ></input>
          <input
            type="email"
            placeholder="Enter your email"
            value={fullname.email}
            onChange={InputEvent}
            required
            name="Email"
          ></input>
          <input
            type="number"
            placeholder="Enter your phone number"
            value={fullname.phone}
            onChange={InputEvent}
            required
            name="phone"
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
