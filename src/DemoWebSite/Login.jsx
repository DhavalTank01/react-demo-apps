import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
  document.title = "Login";

  const [UserData, SetUserData] = useState({
    uname: "",
    password: "",
  });
  const [Data, SetData] = useState({
    uname: "",
    password: "",
  });

  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    SetUserData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const LoginDetail = (event) => {
    event.preventDefault();
    if (UserData.uname === "" || UserData.password === "") {
      alert("Please fill the  form.");
    } else {
      SetData(() => {
        return {
          uname: UserData.uname,
          password: UserData.password,
        };
      });
      SetUserData(() => {
        return {
          uname: "",
          password: "",
        };
      });
    }
  };
  return (
    <>
      <section
        id="loginSection"
        className="d-flex align-items-center justify-content-center flex-column mt-3 "
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h5 className="text-center text-capitalize">
                  {Data.uname
                    ? `Username : ${Data.uname} and Password : ${Data.password} `
                    : null}
                </h5>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="login-form-box">
                    <form className="" noValidate autoComplete="off">
                      <div className="controls">
                        <h4 className="text-capitalize text-center ">Login</h4>
                        <TextField
                          value={UserData.uname}
                          className="input-box"
                          name="uname"
                          type="text"
                          placeholder="Enter your username"
                          id="standard-basic"
                          label="Username "
                          onChange={InputEvent}
                        />
                      </div>
                      <div className="controls">
                        <TextField
                          value={UserData.password}
                          name="password"
                          className="input-box"
                          onChange={InputEvent}
                          type="password"
                          placeholder="Enter your password"
                          id="standard-basic"
                          label="Password"
                        />
                      </div>

                      <div className="controls d-flex align-items-center justify-content-center">
                        <Button
                          color="primary"
                          onClick={LoginDetail}
                          className="MyFort"
                        >
                          Login
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

export default Login;
