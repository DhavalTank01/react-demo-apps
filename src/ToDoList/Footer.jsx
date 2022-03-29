import React from "react";

const Footer = () => {
  return (
    <section id="Footer">
      <p className="text-capitalize text-center footer-box">
        © DRT @ {new Date().getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
