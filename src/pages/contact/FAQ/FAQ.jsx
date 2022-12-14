import React from "react";
import { Helmet } from "react-helmet";
import FaqLeft from "../../../components/faqLeft/FaqLeft";
import FaqRight from "../../../components/faqRight/FaqRight";

import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/FAQ.jpeg";
import Footer from "../../footer/Footer";
import "./FAQ.css";

const Basic = () => {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>Frequently Asked Questions || Nasdec Royal Schools</title>
      </Helmet>
      <Navigation />
      <div className="imgHeader faqImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> FAQ </h1>
      </div>
      <div className="faqContentSides">
        <FaqRight />
        <FaqLeft />
      </div>
      <Footer />
    </div>
  );
};

export default Basic;
