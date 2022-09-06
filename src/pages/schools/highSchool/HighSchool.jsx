import React from "react";
import HighSchoolRight from "../../../components/highSchoolRight/HighSchoolRight";
import HighSchoolLeft from "../../../components/highSchoolLeft/HighSchoolLeft";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/banner.jpg";
import Footer from "../../footer/Footer";

const Basic = () => {
  return (
    <div className="mainContainer">
      <Navigation />
      <div className="imgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> High School </h1>
      </div>
      <div className="contentSides">
        <HighSchoolRight />
        <HighSchoolLeft />
      </div>
      <Footer />
    </div>
  );
};

export default Basic;
