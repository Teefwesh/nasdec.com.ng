import React from "react";
import "./DirectorSpeech.css";
import Director from "../../image/Nasdec.png";
import { HashLink as Link } from "react-router-hash-link";

const DirectorSpeech = () => {
  return (
    <div className="directorSpeech" id="about">
      <img src={Director} alt="NASDEC director" />

      <div className="speech">
        <h1>Director's Speech</h1>
        <p>
          Welcome to the Nasdec Royal Schools website. As you tour our site I
          hope you gain insight into the high quality of education we have to
          offer your child or ward. <br /> Nasdec Royal Schools enjoys a
          reputation as one of the leading schools in the state.
        </p>

        <button className="btn">
          <Link to="/about" className="moreLink">
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DirectorSpeech;
