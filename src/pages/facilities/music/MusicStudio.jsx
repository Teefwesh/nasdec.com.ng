import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/music.jpeg";
import Footer from "../../footer/Footer";

const MusicStudio = () => {
  return (
    <div>
      <Helmet>
        <title>Music Studio || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="With our music studio your wards will become professionals in musical instruments"
        />
      </Helmet>
      <Navigation />
      <div className="imgHeader jnrImgHeader">
        <img src={Banner} alt="nasdec royal school music studio" id="overlay" />
        <h1> Music Studio </h1>
      </div>
      <div className="introSection">
        <img src={Banner} alt="Students in music studio" />
        <div>
          <p>
            The Music Co-curricular program at Nasdec Royal School offers all
            students vocal and instrumental opportunities. We have ensembles to
            cater for different styles and levels of abilities.
          </p>
          <br />
          <p>
            Nasdec Royal School has an extensive instrumental program where
            students can play in one or more of the school’s music ensembles.
          </p>
        </div>
      </div>
      <div className="ictBody">
        <p>
          Our school boasts of a highly accomplished music staff and a
          well-equipped music room on the school campus.
        </p>

        <p>
          The program is managed by the Music Coordinator and specialist tutors
          are brought in to lead the music ensembles. The Music Performance
          Program is very active and has a variety of activities throughout the
          year.
        </p>

        <p>
          Our Music program encourages the musical development of our students
          through the areas of class music, instrumental music and ensemble
          participation.
        </p>

        <p>
          All instrumental students, regardless of where they learn, are
          encouraged to participate in the school’s many ensembles. These
          provide a wonderful opportunity for students to be part of school
          life, make friends and share their talents.
        </p>
        <p>
          Every child is encouraged and nurtured to learn at least one musical
          instrument starting from Year 7. This, however, is an optional subject
          at the Senior Secondary Level owing to the extent of curriculum in
          these classes.
        </p>
        <p>
          Performance opportunities for students include performances at school,
          community functions and concerts.
        </p>
        <p>
          Nasdec Royal School offers a large variety of music enrichment
          activities. These include tutors in piano, guitar, violin, saxophone,
          percussion and singing. Our teachers do not just teach music and
          instruments, they direct the students and channel their minds to
          understand the finesse and intricacies of music.
        </p>
        <br />
        <h2>Music Studio</h2>
        <p>
          All basic musical equipment are made available to the students.
          Instruments like the congo, drum set, piano, guitar, keyboard and
          others are accessible for the students.
        </p>
        <p>
          The music studio is sound proof and there is a separate resonance
          resistance practice room adjacent to the main room.
        </p>
        <p>
          For the dissemination of theoretical knowledge, the music room is
          equipped with smart-boards, latest PCs and upgraded software.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MusicStudio;
