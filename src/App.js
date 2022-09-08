import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import News from "./pages/news/News";
import Home from "./pages/home/Home";
import Basic from "./pages/schools/basic/Basic";
import Nursery from "./pages/schools/nursery/Nursery";
import HighSchool from "./pages/schools/highSchool/HighSchool";
import JuniorSchool from "./pages/schools/juniorSchool/JuniorSchool";
import Contact from "./pages/contact/Contact";
import ICT from "./pages/ICT/ICT";
import FAQ from "./pages/contact/FAQ/FAQ";
import AdmissionGuide from "./pages/admission/admissionGuide/AdmissionGuide";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/ICT&multimedia" component={ICT} />
      <Route exact path="/nursery" component={Nursery} />
      <Route exact path="/basic" component={Basic} />
      <Route exact path="/juniorcollege" component={JuniorSchool} />
      <Route exact path="/seniorcollege" component={HighSchool} />
      <Route exact path="/admissionguide" component={AdmissionGuide} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/news" component={News} />
      <Route exact path="/FAQ" component={FAQ} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
};

export default App;
