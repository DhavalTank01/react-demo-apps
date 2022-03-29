import CopyrightIcon from "@material-ui/icons/Copyright";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-box">
        <h5 className="text-capitalize text-center w-100 ">
          <CopyrightIcon /> DRT @ 2021 All Rights Reserved {year}
        </h5>
      </div>
    </>
  );
};

export default Footer;
