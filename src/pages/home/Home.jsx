import React from "react";
import Header from "../../components/header/Header";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <ImageSlider />
    </div>
  );
};

export default Home;
