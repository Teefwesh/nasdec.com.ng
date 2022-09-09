import React from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/lab2.jpeg";
import Footer from "../../footer/Footer";
// import "./Lab.css";

const Lab = () => {
  return (
    <div>
      <Navigation />
      <div className="imgHeader jnrImgHeader">
        <img src={Banner} alt="Students in science Laboratory" id="overlay" />
        <h1> Lab and Library </h1>
      </div>
      <div className="introSection labSection">
        <img src={Banner} alt="Students in science Laboratory" />
        <div>
          <p>
            <b style={{ fontWeight: "600" }}>Library</b> - The knowledge bank
            and growing interest The Lab and Library is located in an exclusive
            block at Nasdec Royal School which is a cynosure of all eyes. The
            Lab and Library Block is an integral part of the school’s learning
            program and trains its students with skills that help them achieve
            academic excellence. The library has a wide range of meticulously
            selected collection of resources like subject books, fiction,
            nonfiction books, journal, magazines, and reference books.
            <br />
            The collection includes over 2,000 print books and the number is on
            a rapid increase.
          </p>
        </div>
      </div>
      <div className="ictBody">
        <p>
          Our library has lots of learning spaces and the staff at happy to
          assist with any questions students may have. The library is open to
          students during first and second break.
        </p>
        <br />
        <p>
          <b style={{ fontWeight: "600" }}>Lab</b> - Trust but verify is the
          principle of science
        </p>

        <p>
          Nasdec Royal School has developed separate and full-fledged labs for
          Physics, Chemistry, Mathematics and Life Sciences, as these subjects
          are not only based on theoretical learning but practical applications
          as well. <br /> The curriculum at Nasdec Royal School helps the
          students to develop science skills through keen observation in the
          areas of scientific theories, life processes, materials and their
          physical and chemical properties. <br /> Students are given proper
          demonstrations and are expected to conduct these experiments as
          stipulated in their curriculum.
        </p>
        <br />
        <p>
          <b style={{ fontWeight: "600" }}>Computer Lab</b> - Windows open the
          door to worldwide wisdom.
        </p>
        <p>
          Today, all over the world, Information and Communication Technology
          (ICT) has become an integral part of the lifestyle. <br /> Nasdec
          Royal School integrates ICT into the curriculum, with the
          state-of-the-art computer laboratory that has latest hardware and
          software with high-speed Internet connectivity. <br /> There is a very
          healthy student system ratio of 1:1. Faculty assists the students to
          browse the Internet in a filtered way to gather information relating
          to their subjects, projects in hand and also to update their
          knowledge.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Lab;
