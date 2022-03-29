import React from "react";
import img2 from "../DemoWebSite/images/img5.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  document.title = "Home";
  return (
    <>
      <section
        id="HomeSection"
        className="d-flex align-items-center justify-content-center flex-column   "
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column">
                  <h1 className="text-capitalize">
                    grow your business with <strong>DRT</strong>
                  </h1>
                  <h2 className="text-capitalize">
                    we are the team of talented developer making website
                  </h2>
                  <div>
                    <NavLink
                      to="/services"
                      className="btn btn-outline-success mx-1 text-capitalize "
                    >
                      get started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 mt-2 order-1 order-lg-2 header-img d-flex justify-content-center align-items-center flex-column">
                  <img
                    src={img2}
                    className="img-fluid img-animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
