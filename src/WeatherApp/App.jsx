import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import WeatherApp from "./WeatherApp";
const App = () => {
  return (
    <>
      <Header />
      <WeatherApp />
      <Footer />
    </>
  );
};

export default App;
