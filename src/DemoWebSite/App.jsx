import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./style.css";
// import "./error.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Registration from "./Registration";
import Login from "./Login";
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route  path="*" component={Home} />       
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
