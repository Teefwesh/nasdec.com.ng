import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import "./Header.css";
import Logo from "../../image/logo.png";

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
        <Link to="/">
          <img
            src={Logo}
            alt="Nasde Royal Schools logo"
            style={{ width: "10rem", height: "9rem" }}
          />
        </Link>
      </div>

      <NavBar showMenu={showMenu} />

      <div id="mobile">
        <div
          className={"mobileBar " + (showMenu ? " active" : null)}
          onClick={() => setShowMenu(true)}
        >
          <FontAwesomeIcon icon={faBars} className="bars" />
        </div>

        <div
          className={"mobileTimes" + (!showMenu ? " active" : null)}
          onClick={() => setShowMenu(false)}
        >
          <FontAwesomeIcon icon={faTimes} className="bars" />
        </div>
      </div>
    </div>
  );
};

export default Header;
