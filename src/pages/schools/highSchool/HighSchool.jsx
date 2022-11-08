import React from "react";
import HighSchoolRight from "../../../components/highSchoolRight/HighSchoolRight";
import HighSchoolLeft from "../../../components/highSchoolLeft/HighSchoolLeft";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/lab2.jpeg";
import Footer from "../../footer/Footer";
import "./HighSchool.css";
import { Helmet } from "react-helmet";

const Basic = () => {
  return (
    <div className="mainContainer">
      <Helmet>
        <title>Senior School || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Senior school students prepared for higher education(University)"
        />
      </Helmet>
      <Navigation />
      <div className="imgHeader snrImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> Senior School </h1>
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
