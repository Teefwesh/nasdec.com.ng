import React from "react";
import BasicRight from "../../../components/basicRight/BasicRight";
import BasicLeft from "../../../components/basicLeft/BasicLeft";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/practical.jpeg";
import Footer from "../../footer/Footer";
import "./Basic.css";
import { Helmet } from "react-helmet";

const Basic = () => {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>Basic || Nasdec Royal Schools</title>
      </Helmet>
      <Navigation />
      <div className="imgHeader basicImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> Basic </h1>
      </div>
      <div className="contentSides">
        <BasicRight />
        <BasicLeft />
      </div>
      <Footer />
    </div>
  );
};

export default Basic;
