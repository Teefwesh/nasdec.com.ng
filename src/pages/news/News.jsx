import React from "react";
import { news } from "../../data/NewsData";
import "./News.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../footer/Footer";
import Banner from "../../image/news.jpg";
import { Helmet } from "react-helmet";

const News = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const slice = news.cardData.slice(0, noOfElement);

  return (
    <>
      <Helmet>
        <title>News || Nasdec Royal Schools</title>
        <meta
          name="description"
          content="Stay informed about Nasdec Royal Schools and always be updated"
        />
      </Helmet>
      <Navigation />
      <div className="imgHeader newsImgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        <h1> News and Events </h1>
      </div>
      <section className="py-4 container newsContainer">
        <div className="row justify-content-center">
          {slice.map((item, index) => {
            return (
              <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4" key={index}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                  <img src={item.img} alt="" className="newsImg" />
                  <div className="card-body">
                    <div className="card-title">{item.title}</div>
                    <div className="card-date">{item.date}</div>
                    <p className="card-text">{item.desc}</p>
                    <Link to="#" className="readBtn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="loadBtn">
          <button
            className="btn btn-primary mx-auto d-block w-100"
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default News;
