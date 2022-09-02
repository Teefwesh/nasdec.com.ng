import React from "react";
import "./DirectorSpeech.css";
import Director from "../../image/Nasdec.png";

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

        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default DirectorSpeech;
