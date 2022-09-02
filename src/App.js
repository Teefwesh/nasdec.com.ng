import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  );
};

export default App;
