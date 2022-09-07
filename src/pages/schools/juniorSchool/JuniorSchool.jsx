import React from "react";
import JuniorSchoolRight from "../../../components/juniorSchoolRight/JuniorSchoolRight";
import JuniorSchoolLeft from "../../../components/juniorSchoolLeft/JuniorSchoolLeft";

import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/computer2.jpeg";
import Footer from "../../footer/Footer";

const Basic = () => {
  return (
    <div className="mainContainer">
      <Navigation />
      <div className="imgHeader jnrImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> Junior School </h1>
      </div>
      <div className="contentSides">
        <JuniorSchoolRight />
        <JuniorSchoolLeft />
      </div>
      <Footer />
    </div>
  );
};

export default Basic;
