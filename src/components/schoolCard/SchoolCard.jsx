import React from "react";
import "./SchoolCard.css";
import Nursery from "../../image/nur.jpeg";
import Primary from "../../image/img3.jpeg";
import Secondary from "../../image/best.jpeg";

const SchoolCard = () => {
  return (
    <div className="schoolCard">
      <div className="nurseryCard">
        <div>
          <img src={Nursery} alt="" />
        </div>
        <h3>Nursery</h3>
      </div>

      <div className="nurseryCard">
        <div>
          <img src={Primary} alt="" />
        </div>
        <h3>Primary</h3>
      </div>

      <div className="nurseryCard">
        <div>
          <img src={Secondary} alt="" />
        </div>
        <h3>College</h3>
      </div>
    </div>
  );
};

export default SchoolCard;
