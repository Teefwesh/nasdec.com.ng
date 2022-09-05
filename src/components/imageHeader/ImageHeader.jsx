import React from "react";
import "./ImageHeader.css";
import Building from "../../image/building4.jpeg";

const ImageHeader = () => {
  return (
    <div className="imageHeader">
      <img src={Building} alt="nasdec royal school building" />
      <h1>About Nasdec Royal Schools</h1>
    </div>
  );
};

export default ImageHeader;
