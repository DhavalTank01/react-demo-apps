import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="main-div">
        <div className="logo">
          <h2>
            <span>R</span>esponsive
            <span>N</span>avbar
          </h2>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">services</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a href="/" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="/" target="_blank">
                <i className="fab fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="main-section">
        <p>
          welcome to my<h1>website</h1>{" "}
        </p>
      </section>
    </>
  );
};

export default Navbar;
