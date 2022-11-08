import React from "react";
import NurseryRight from "../../../components/nurseryRight/NurseryRight";
import NurseryLeft from "../../../components/nurseryLeft/NurseryLeft";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/nur3.jpeg";
import "./Nursery.css";
import Footer from "../../footer/Footer";
import { Helmet } from "react-helmet";

const Nursery = () => {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>Nursery || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Nursery school students well taken care of "
        />
      </Helmet>
      <Navigation />
      <div className="imgHeader nurImgHeader">
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
