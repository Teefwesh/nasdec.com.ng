import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import CounterUp from "../counterUp/CounterUp";
import DirectorSpeech from "../directorSpeech/DirectorSpeech";
import Footer from "../footer/Footer";
import Schools from "../schools/Schools";
import Events from "../events/Events";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <Navigation />
      <ImageSlider />
      <DirectorSpeech />
      <CounterUp />
      <Schools />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
