import React from "react";
import NurseryRight from "../../../components/nurseryRight/NurseryRight";
import NurseryLeft from "../../../components/nurseryLeft/NurseryLeft";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/banner.jpg";
import "./Nursery.css";
import Footer from "../../footer/Footer";

const Nursery = () => {
  return (
    <div className="mainContainer">
      <Navigation />
      <div className="imgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> Nursery </h1>
      </div>
      <div className="contentSides">
        <NurseryRight />
        <NurseryLeft />
      </div>
      <Footer />
    </div>
  );
};

export default Nursery;
