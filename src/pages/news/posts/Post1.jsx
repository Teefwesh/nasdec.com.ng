import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Navigation from "../../../components/Navigation/Navigation";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Img1 from "../../../image/best.jpeg";
import Footer from "../../footer/Footer";

const Post1 = () => {
  return (
    <>
      <Navigation />
      <div className="post">
        <h1>Debate Competition</h1>

        <div className="breadcrumbs">
          <Link to="/">
            Home <AiOutlineRight />
          </Link>
          <Link to="/news">
            News <AiOutlineRight />
          </Link>
          <Link to="#" style={{ cursor: "default", textDecoration: "none" }}>
            Debate Competition
          </Link>
        </div>
      </div>

      <div className="sides">
        <div className="mainPost">
          <img src={Img1} alt="" />
          <h1>The National Award Wining Debate Competition</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
            obcaecati animi excepturi laborum laboriosam consequuntur rerum
            nobis aliquid nemo incidunt, expedita sint asperiores sed blanditiis
            cumque repellat optio a ratione.
          </p>

          <div className="btns">
            <button className="prevBtn">
              <Link to="#" className="btnLink">
                <AiOutlineLeft /> Previous
              </Link>
            </button>
            <button className="nextBtn">
              <Link to="#" className="btnLink">
                Next <AiOutlineRight />
              </Link>
            </button>
          </div>
        </div>
        <div className="recentPost">
          <h3>Recent Post</h3>
          <Link className="recentPostHead">Sport Competition</Link>
          <p className="date">Augut 10, 2021</p>

          <Link className="recentPostHead">School Excursion</Link>
          <p className="date">September 10, 2022</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Post1;
