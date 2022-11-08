import React from "react";
import "./SchoolCard.css";
import Nursery from "../../image/nur.jpeg";
import Primary from "../../image/img3.jpeg";
import Secondary from "../../image/best.jpeg";
import { Link } from "react-router-dom";

const SchoolCard = () => {
  return (
    <div className="schoolCard">
      <div className="nurseryCard">
        <div>
          <img src={Nursery} alt="" />
        </div>
        <h3>
          <Link to="/nursery" className="cardLink">
            Nursery
          </Link>
        </h3>
      </div>

      <div className="nurseryCard">
        <div>
          <img src={Primary} alt="" />
        </div>
        <h3>
          <Link to="/basic" className="cardLink">
            Primary
          </Link>
        </h3>
      </div>

      <div className="nurseryCard">
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
