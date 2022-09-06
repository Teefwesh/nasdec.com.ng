import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import Basic from "./pages/schools/basic/Basic";
import Nursery from "./pages/schools/nursery/Nursery";
import HighSchool from "./pages/schools/highSchool/HighSchool";
import JuniorSchool from "./pages/schools/juniorSchool/JuniorSchool";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/schools/nursery" component={Nursery} />
      <Route exact path="/schools/basic" component={Basic} />
      <Route exact path="/schools/juniorschool" component={JuniorSchool} />
      <Route exact path="/schools/highschool" component={HighSchool} />
      <Route exact path="/gallery" component={Gallery} />
    </div>
  );
};

export default App;
