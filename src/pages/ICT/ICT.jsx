import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../image/computer2.jpeg";
import Footer from "../footer/Footer";
import "./ICT.css";

const ICT = () => {
  return (
    <div>
      <Navigation />
      <div className="imgHeader jnrImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> ICT & Multimedia </h1>
      </div>
      <div className="introSection">
        <img src={Banner} alt="Students in computer Laboratory" />
        <div>
          <p>
            Information Technology skills allow students to connect to the world
            around them and to engage with the sea of information at their
            fingertips, allowing them to become information generators as well
            as information consumers.
          </p>
          <br />
          <p>
            Studying Information Technology is important in preparing students
            for their future and gives them the future focused skills they need
            to approach new technologies with excitement and vigour.
          </p>
        </div>
      </div>
      <div className="ictBody">
        <p>
          Students at the high school level must cultivate their computer
          literacy, computation thinking and coding skills by using a range of
          online software packages.
        </p>
        <br />
        <p>
          This expands the student's understanding to the wide range of uses of
          technology, also developing their skills to stay safe and secure in
          the online environment.
        </p>
        <br />
        <p>
          Students at Nasdec Royal School have the opportunity to develop their
          understanding of Information Systems, Processes & Technology, their
          role in society and their underlying principles.
        </p>
        <br />
        <p>
          Multimedia elective allows students to demonstrate their creativity
          and communication skills, while learning to manage large projects.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ICT;
