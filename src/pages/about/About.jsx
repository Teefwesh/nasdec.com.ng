import React from "react";
import "./About.css";
import Footer from "../footer/Footer";
import RightSide from "../../components/rightSide/RightSide";
import LeftSide from "../../components/leftSide/LeftSide";
import Navigation from "../../components/Navigation/Navigation";
import Building from "../../image/building4.jpeg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Get more information about Nasdec Royal schools "
        />
      </Helmet>
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
