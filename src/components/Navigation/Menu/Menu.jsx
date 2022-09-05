import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ route }) => {
  return (
    <div className="menu">
      <div className="menuButton">{route.name}</div>
      <div className="subRoutesContainer">
        {route.subRoutes.map((subRoute) => (
          <Link to={subRoute.link} className="subRoute" key={subRoute.name}>
            {subRoute.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
