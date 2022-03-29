import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
  // useParams is use for url parameter
  const { uname, id } = useParams();

  // useLocation is use for get current location/url
  const loc = useLocation();

  // it collect our route or instance we visited.
  const history = useHistory();
  // console.log(history);
  document.title = "User Info page";
  return (
    <>
      <h1 className="text-center text-capitalize ">
        User name is {uname} and ID is {id}
      </h1>
      <h2 className="text-center text-capitalize ">
        My current location is <span>{loc.pathname}</span>
      </h2>
      <div className=" btn_div">
        {loc.pathname === `/user/DhavalTank/01` ? (
          <button
            className="btn-primary p-2 text-capitalize m-2   "
            onClick={() => {
              alert("you are awesome");
            }}
          >
            Click me
          </button>
        ) : null}

        <button
          className="btn-primary p-2 text-capitalize m-2"
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back
        </button>
        <button
          className="btn-primary p-2 text-capitalize m-2"
          onClick={() => {
            history.push("/");
          }}
        >
          Goto Home
        </button>
        <button
          className="btn-primary p-2 text-capitalize m-2"
          onClick={() => {
            history.push("/about");
          }}
        >
          Goto About
        </button>
        <button
          className="btn-primary p-2 text-capitalize m-2"
          onClick={() => {
            history.push("/error");
          }}
        >
          Goto Error
        </button>
      </div>
    </>
  );
};
export default User;
