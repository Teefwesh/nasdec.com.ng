import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ExpandMenu.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="expandMenu">
      <div className="expandMenuButton" onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </div>
      <div
        className={`expandSubRoutesContainer ${
          isMenuOpen ? "active" : "inactive"
        }`}
      >
        {route.subRoutes.map((subRoute) => (
          <Link
            to={subRoute.link}
            className="expandSubRoute"
            key={subRoute.name}
          >
            {subRoute.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpandMenu;
