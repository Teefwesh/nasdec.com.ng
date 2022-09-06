import React from "react";
import "./About.css";
import Footer from "../footer/Footer";
import RightSide from "../../components/rightSide/RightSide";
import LeftSide from "../../components/leftSide/LeftSide";
import Navigation from "../../components/Navigation/Navigation";
import Building from "../../image/building4.jpeg";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <div className="aboutHeader">
        <img src={Building} alt="nasdec royal school building" />
        <h1>About Nasdec Royal Schools</h1>
      </div>
      <div className="aboutSides">
        <RightSide />
        <LeftSide />
      </div>
      <Footer />
    </div>
  );
};

export default About;
