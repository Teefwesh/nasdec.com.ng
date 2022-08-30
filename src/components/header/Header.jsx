import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./Header.css";

const Header = () => {
  const myRef = useRef();

  const [boxShadow, setBoxShadow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const addBoxShadow = () => {
    if (window.scrollY > 0) {
      setBoxShadow(true);
    } else {
      setBoxShadow(false);
    }
  };

  window.addEventListener("scroll", addBoxShadow);

  return (
    <div ref={myRef} className={boxShadow ? "header active" : "header"}>
      <div className="logo">
        <Link to="/"> NASDEC School</Link>
      </div>

      <NavBar showMenu={showMenu} />

      <div id="mobile">
        <div
          className={showMenu ? "mobileBar active" : "mobileBar"}
          onClick={() => setShowMenu(true)}
        >
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>

        <div
          className={!showMenu ? "mobileTimes active" : "mobileTimes"}
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="bars" />
        </div>
      </div>
    </div>
  );
};

export default Header;
