import React from "react";
import "./Events.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { recentNewsAndEvent } from "../../data/EventData";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="events" id="news">
      <h1>Events and Recent News</h1>
      <Slider {...settings}>
        {recentNewsAndEvent.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
              />

              <h1>{item.title}</h1>
              <p style={{ textAlign: "center" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
