import React, { useEffect } from "react";
import "./SchoolCard.css";
import Nursery from "../../image/nur.jpeg";
import Primary from "../../image/img3.jpeg";
import Secondary from "../../image/best.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SchoolCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="schoolCard">
      <div className="nurseryCard" data-aos="fade-right">
        <div>
          <img src={Nursery} alt="" />
        </div>
        <h3>
          <Link to="/nursery" className="cardLink">
            Nursery
          </Link>
        </h3>
      </div>

      <div className="nurseryCard" data-aos="fade-up">
        <div>
          <img src={Primary} alt="" />
        </div>
        <h3>
          <Link to="/basic" className="cardLink">
            Primary
          </Link>
        </h3>
      </div>

      <div className="nurseryCard" data-aos="fade-down-left">
        <div>
          <img src={Secondary} alt="" />
        </div>
        <h3>
          <Link to="/seniorcollege" className="cardLink">
            College
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SchoolCard;
