import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Main Nav
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Gallery from "./pages/gallery/Gallery";

// Sub Nav
import ICT from "./pages/facilities/ICT/ICT";
import Lab from "./pages/facilities/lab/Lab";
import BrightClassroom from "./pages/facilities/brightClassroom/BrightClassroom";
import Basic from "./pages/schools/basic/Basic";
import Nursery from "./pages/schools/nursery/Nursery";
import JuniorSchool from "./pages/schools/juniorSchool/JuniorSchool";
import HighSchool from "./pages/schools/highSchool/HighSchool";
import AdmissionGuide from "./pages/admission/admissionGuide/AdmissionGuide";
import FAQ from "./pages/contact/FAQ/FAQ";
import Contact from "./pages/contact/Contact";
import MusicStudio from "./pages/facilities/music/MusicStudio";
import Post1 from "./pages/news/posts/Post1";
import { Helmet } from "react-helmet";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Nasdec Royal Schools is one of the leading schools in Ogun state and Nigeria. We offer creche, nursery, primary, junior and senior college"
        />
        <meta
          name="keywords"
          content="Nasdec, interactive, Nursery, Primary, Secondary, Ogun state, best in Nigeria"
        />
      </Helmet>
      <div>
        {/* Main Nav Route */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/news" component={News} />

        {/* Sub Nav Route */}
        <Route exact path="/ICT&multimedia" component={ICT} />
        <Route exact path="/lab" component={Lab} />
        <Route exact path="/brightclassroom" component={BrightClassroom} />
        <Route exact path="/musicstudio" component={MusicStudio} />

        <Route exact path="/nursery" component={Nursery} />
        <Route exact path="/basic" component={Basic} />
        <Route exact path="/juniorcollege" component={JuniorSchool} />
        <Route exact path="/seniorcollege" component={HighSchool} />
        <Route exact path="/admissionguide" component={AdmissionGuide} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/post1" component={Post1} />
      </div>
    </>
  );
};

export default App;
