import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Registration = () => {
  document.title = "Registration";
  const [UserData, SetUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });
  const [Data, SetData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    SetUserData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const RegistrationDetails = (event) => {
    event.preventDefault();
    if (
      UserData.fname === "" ||
      UserData.lname === "" ||
      UserData.email === "" ||
      UserData.phone === "" ||
      UserData.address === ""
    ) {
      alert("Please Fill the form.");
    } else {
      SetData(() => {
        return {
          fname: UserData.fname,
          lname: UserData.lname,
          email: UserData.email,
          phone: UserData.phone,
          address: UserData.address,
        };
      });
      SetUserData(() => {
        return {
          fname: "",
          lname: "",
          email: "",
          phone: "",
          address: "",
        };
      });
    }
  };
  return (
    <>
      <section
        id="RegSection"
        className="d-flex align-items-center justify-content-center flex-column mt-3 "
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h5 className="text-center text-capitalize">
                  {Data.fname
                    ? ` Thank you ${Data.fname} ${Data.lname} Your account create successfully. `
                    : null}
                </h5>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="login-form-box">
                    <form className="" noValidate autoComplete="off">
                      <div className="controls">
                        <h4 className="text-capitalize text-center ">
                          Create Account
                        </h4>
                        <TextField
                          value={UserData.fname}
                          className="input-box"
                          name="fname"
                          type="text"
                          placeholder="Enter your first name"
                          id="standard-basic"
                          label="First Name"
                          onChange={InputEvent}
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.lname}
                          name="lname"
                          className="input-box"
                          onChange={InputEvent}
                          type="text"
                          placeholder="Enter your last name"
                          id="standard-basic"
                          label="Last Name"
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.email}
                          name="email"
                          className="input-box"
                          onChange={InputEvent}
                          type="email"
                          placeholder="Enter your email"
                          id="standard-basic"
                          label="Email"
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.phone}
                          name="phone"
                          className="input-box"
                          onChange={InputEvent}
                          type="number"
                          placeholder="Enter your phone number"
                          id="standard-basic"
                          label="Phone Number"
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.address}
                          name="address"
                          className="input-box"
                          onChange={InputEvent}
                          id="outlined-multiline-static"
                          type="text"
                          placeholder="Enter your address"
                          label="Address"
                          multiline
                          rows={4}
                        />
                      </div>

                      <div className="controls d-flex align-items-center justify-content-center">
                        <Button
                          color="primary"
                          onClick={RegistrationDetails}
                          className="MyFort"
                        >
                          Register
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
