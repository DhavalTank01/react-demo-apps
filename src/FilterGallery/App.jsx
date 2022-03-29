import React from "react";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import "./style.css";
import "./style.scss";

const App = () => {
    document.title="DRT Gallery"
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
