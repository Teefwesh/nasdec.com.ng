import React from "react";
import { useState } from "react";
import { routes } from "../../constantNav";
import Drawer from "./Drawer/Drawer";
import Navbar from "./Navbar/Navbar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
