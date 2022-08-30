import React from "react";
import "./SchoolCard.css";
import Nursery from "../../image/nur.jpg";
import Primary from "../../image/pry.png";
import Secondary from "../../image/sec.jpg";

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
