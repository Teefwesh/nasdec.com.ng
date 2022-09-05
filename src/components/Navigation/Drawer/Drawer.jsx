import React from "react";
import { Link } from "react-router-dom";
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import "./Drawer.css";

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}

      <div className={`drawer ${isOpen ? null : "active"}`}>
        <div className="rightNav">
          <div className="mobileNavRoutes">
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu route={route} key={route.name} />;
              }
              return (
                <Link to={route.link} className="navRoute" key={route.name}>
                  {route.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
