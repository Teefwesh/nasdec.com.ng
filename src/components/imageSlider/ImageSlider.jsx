import React from "react";
import "./ImageSlider.css";
import Carousel from "react-bootstrap/Carousel";
import Creche from "../../image/img2.jpeg";
import Image1 from "../../image/img1.jpeg";
import Image2 from "../../image/computer.jpeg";

const ImageSlider = () => {
  return (
    <div className="imageSlider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Creche}
            alt="First slide"
            style={{ width: "100%", height: "670px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h1
              style={{
                color: "#fff",
                fontSize: "3rem",
              }}
            >
              Quality and Value!
            </h1>
            <p
              style={{
                color: "yellow",
                fontWeight: "300",
                textShadow: "0 0.2rem 0.8rem rgba(255, 255, 255, 0.9)",
                fontSize: "2rem",
              }}
            >
              Educating tomorow's leaders
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="Second slide"
            style={{ width: "100%", height: "670px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h1
              style={{
                color: "#fff",
                fontSize: "3rem",
              }}
            >
              Quality Education for a Brighter Future
            </h1>
            <p
              style={{
                color: "yellow",
                fontWeight: "300",
                textShadow: "0 0.2rem 0.8rem rgba(255, 255, 255, 0.9)",
                fontSize: "2rem",
              }}
            >
              We work to ensure the future of tomorrow's leaders
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Third slide"
            style={{ width: "100%", height: "670px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h1
              style={{
                color: "#fff",
                fontSize: "3.5rem",
              }}
            >
              Performance is Key!
            </h1>
            <p
              style={{
                color: "yellow",
                fontWeight: "300",
                textShadow: "0 0.2rem 0.8rem rgba(255, 255, 255, 0.9)",
                fontSize: "2rem",
              }}
            >
              Our teachers are kin to bring out the best in your children
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
