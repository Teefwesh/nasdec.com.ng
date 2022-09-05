import React from "react";
import "./About.css";
import ImageHeader from "../../components/imageHeader/ImageHeader";
import Footer from "../footer/Footer";
import RightSide from "../../components/rightSide/RightSide";
import LeftSide from "../../components/leftSide/LeftSide";
import Navigation from "../../components/Navigation/Navigation";

const About = () => {
  return (
    <div className="about">
      <Navigation />
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
