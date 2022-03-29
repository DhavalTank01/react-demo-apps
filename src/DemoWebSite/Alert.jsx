import React from "react";
const Alert = (props) => {
  console.log(props.errorClass);
  console.log(props.errorMessage);
  console.log(props.errorFlag);
  // console.log(`alert ${props.errorClass}`);

  return (
    <>
      <div className={props.errorClass}>
        <input type="checkbox" id="alert1" />
        <label className="close" title="close" htmlFor="alert1">
          <i className="icon-remove"></i>
        </label>
        <p className="inner">
          <strong>{props.errorClass}</strong> {props.errorMessage}
        </p>
      </div>
    </>
  );
};

export default Alert;
