import React from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/classroom.jpeg";
import Footer from "../../footer/Footer";

const BrightClassroom = () => {
  return (
    <div>
      <Navigation />
      <div className="imgHeader jnrImgHeader">
        <img src={Banner} alt="a view of our classroom" id="overlay" />
        <h1> Brigh Classroom </h1>
      </div>
      <div className="introSection">
        <img src={Banner} alt="Bright classroom" />
        <div>
          <p>
            The main features of bright classrooms at Nasdec Royal Schools are
            not limited to:
          </p>
          <br />
          <p>
            <b style={{ fontWeight: "600" }}>Light:</b> Daylight is critical and
            even better if there are natural elements outside the windows.
          </p>
          <p>
            <b style={{ fontWeight: "600" }}>Noiseless:</b> Not surprisingly,
            silence really does help with concentration.
          </p>
        </div>
      </div>
      <div className="ictBody">
        <p>
          <b style={{ fontWeight: "600" }}>Temperature:</b> Students apparently
          learn best in classrooms between 23 and 27 degrees Celsius. Similarly,
          poor air quality can hinder learning. All our classrooms have air
          conditioning.
        </p>

        <p>
          <b style={{ fontWeight: "600" }}>Plants:</b> The presence of plants
          has been shown to have a calming effect on people, regardless of age.
        </p>

        <p>
          <b style={{ fontWeight: "600" }}>Wall decorations:</b> Educative
          posters with animals, nature, or inspirational quotes can have a
          positive effect on students.
        </p>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default BrightClassroom;
