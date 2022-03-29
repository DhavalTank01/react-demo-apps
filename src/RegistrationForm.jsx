import { useState } from "react";

const RegistrationForm = () => {
  const [uinfo, SetDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
    password: "",
  });

  const [details, setDetails2] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qua: "",
    password: "",
    
  });

  const InputEvent = (obj) => {
    const value = obj.target.value;
    const name = obj.target.name;

    SetDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const OnSubmitEvent = (obj) => {
    obj.preventDefault();
    alert("Form is submitted.");
    setDetails2((preVal) => {
      return {
        
        fname: uinfo.fname,
        lname: uinfo.lname,
        email: uinfo.email,
        phone: uinfo.phone,
        password: uinfo.password,
        qua: uinfo.qua,
        
      };
    });
  };
  const ResetForm = () => {
    SetDetails(() => {
      return {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua: "",
        password: "",
      };
    });
    setDetails2(() => {
      return {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua: "",
        password: "",
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
        <h3> {details.qua}</h3>
        <h3> {details.password}</h3>
        <form onSubmit={OnSubmitEvent}>
          <input
            type="text"
            placeholder="Enter your first name"
            value={uinfo.fname}
            onChange={InputEvent}
            required
            name="fname"
          ></input>
          <input
            type="text"
            placeholder="Enter your last name"
            value={uinfo.lname}
            onChange={InputEvent}
            required
            name="lname"
          ></input>
          <input
            type="email"
            placeholder="Enter your email"
            value={uinfo.email}
            onChange={InputEvent}
            required
            name="email"
          ></input>
          <input
            type="number"
            placeholder="Enter your phone number"
            value={uinfo.phone}
            onChange={InputEvent}
            required
            name="phone"
          ></input>
          <input
            type="text"
            placeholder="Enter your qualification"
            value={uinfo.qua}
            onChange={InputEvent}
            required
            name="qua"
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={uinfo.password}
            onChange={InputEvent}
            required
            name="password"
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

export default RegistrationForm;
