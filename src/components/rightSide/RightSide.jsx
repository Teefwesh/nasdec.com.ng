import React from "react";
import "./RightSide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const RightSide = () => {
  return (
    <div className="rightSide">
      <h1>Welcome to nasdec royal schools</h1>

      <p>
        As you tour our site I hope you gain insight into the high quality of
        education we have to offer your child or ward.
      </p>
      <p>
        <b>Nasdec Royal Schools</b> was established in <b>September 2015 </b>.
        The focus of Nasdec Royal Schools is the development of world-class
        facets of our operations which is not limited to curriculum, teaching
        methodologies, staff quality, libraries, technology, buildings,
        resources, facilities, management and so on.
      </p>
      <p>
        We are in tune with the future of learning, and we continue to lead the
        pack in world-class education. It consists of the following schools:
      </p>

      <ul className="schList">
        <div>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
              width: "1.8rem",
              height: "1.8rem",
              color: "green",
              marginBottom: "1rem",
            }}
          />
          <li> Nasdec Royal Nursery and Primary Schools</li>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{
              width: "1.8rem",
              height: "1.8rem",
              color: "green",
              marginBottom: "0.75rem",
            }}
          />
          <li>Nasdec Royal College</li>
        </div>
      </ul>

      <p style={{ marginTop: "3.5rem" }}>
        Nasdec Royal College is approved by WAEC, NECO and the government. We
        work closely with parents to foster self-discipline, responsibility,
        confidence and an enthusiasm for learning. We take pride in our diverse
        community and ensure that our children understand the value of growing
        and learning together. We also take great care to ensure that our
        curriculum and facilities are exciting, challenging and innovative.
      </p>
      <p>
        Nasdec Royal Schools enjoys a reputation as one of the leading schools
        in the state.
      </p>

      <div className="mission">
        <h1>Our Mission</h1>
        <p>
          To provide the highest quality education to all our learners, empower
          them to lead a productive and fulfilling lives and equip them to take
          over the society and universal leadership as good citizens.
        </p>
      </div>
      <div className="vission">
        <h1>Our Vission</h1>
        <p>
          Commitment to provide educational excellence for all, to empower and
          inspire our learners to be creative, innovative and imporve them for
          successful careers in the global society.
        </p>
      </div>
    </div>
  );
};

export default RightSide;
