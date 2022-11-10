import React, { useEffect } from "react";
import "./DirectorSpeech.css";
import Director from "../../image/Nasdec.png";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";

const DirectorSpeech = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="directorSpeech" id="about">
      <img src={Director} alt="NASDEC director" data-aos="fade-right" />

      <div className="speech" data-aos="fade-up">
        <h1>Director's Speech</h1>
        <p>
          Welcome to the Nasdec Royal Schools website. As you tour our site I
          hope you gain insight into the high quality of education we have to
          offer your child or ward. <br /> Nasdec Royal Schools enjoys a
          reputation as one of the leading schools in the state.
        </p>

        <button className="btnButton">
          <Link to="/about" className="moreLink">
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DirectorSpeech;
