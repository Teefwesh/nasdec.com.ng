import React from "react";
import "./App.css";
import CounterUp from "./pages/counterUp/CounterUp";
import DirectorSpeech from "./pages/directorSpeech/DirectorSpeech";
import Footer from "./pages/footer/Footer";

import Home from "./pages/home/Home";
import Schools from "./pages/schools/Schools";

const App = () => {
  return (
    <div>
      <Home />
      <DirectorSpeech />
      <CounterUp />
      <Schools />
      <Footer />
    </div>
  );
};

export default App;
