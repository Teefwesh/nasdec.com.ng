import React from "react";
import "./About.css";
import Header from "../../components/header/Header";
import ImageHeader from "../../components/imageHeader/ImageHeader";
import DirectorSpeech from "../directorSpeech/DirectorSpeech";
import Footer from "../footer/Footer";
import RightSide from "../../components/rightSide/RightSide";
import LeftSide from "../../components/leftSide/LeftSide";

const About = () => {
  return (
    <div className="about">
      <Header />
      <ImageHeader />
      <div className="aboutSides">
        <RightSide />
        <LeftSide />
      </div>
      <Footer />
    </div>
  );
};

export default About;
