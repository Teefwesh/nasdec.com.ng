import React, { useState } from "react";
import "./CounterUp.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faSchool,
  faUserGraduate,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="counterUp" id="counter">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          style={{
            width: "100%",
            // color: "white",
            // backgroundColor: "#eee",
            padding: "19rem 9% ",
          }}
        >
          <div className="icons-container">
            <div className="icons">
              <FontAwesomeIcon icon={faSchool} className="icn" />
              <div className="content">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={7}
                    duration={2}
                    delay={0}
                    style={{
                      fontSize: "3.7rem",
                      fontWeight: "500",
                      color: "var(--blue)",
                    }}
                  />
                )}
                <p> Years</p>
              </div>
            </div>

            <div className="icons">
              <FontAwesomeIcon icon={faUserGraduate} className="icn" />
              <div className="content">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={98}
                    duration={2}
                    delay={0}
                    style={{
                      fontSize: "3.7rem",
                      fontWeight: "500",
                      color: "var(--blue)",
                    }}
                  />
                )}
                <h1 className="add">%</h1>
                <p>Pass Rate to University</p>
              </div>
            </div>

            <div className="icons">
              <FontAwesomeIcon icon={faUsers} className="icn" />
              <div className="content">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={8658}
                    duration={2}
                    delay={0}
                    style={{
                      fontSize: "3.7rem",
                      fontWeight: "500",
                      color: "var(--blue)",
                    }}
                  />
                )}
                <h1 className="plus">+</h1>
                <p>Enrolled Student</p>
              </div>
            </div>

            <div className="icons">
              <FontAwesomeIcon icon={faFaceSmile} className="icn" />
              <div className="content">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={100}
                    duration={2}
                    delay={0}
                    style={{
                      fontSize: "3.7rem",
                      fontWeight: "500",
                      color: "var(--blue)",
                    }}
                  />
                )}
                <h1 className="percent">%</h1>
                <p>Satified Parents</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CounterUp;
