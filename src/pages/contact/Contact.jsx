import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsHouseDoor } from "react-icons/bs";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../image/contact.jpeg";

const Contact = () => {
  return (
    <div>
      <Navigation />

      <div className="imgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        {/* <h1> Contact Us</h1> */}
      </div>

      <Container
        style={{
          fontSize: "1.8rem",
          padding: "5rem 6% 3rem",
        }}
      >
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <h3 className="color_sec py-4" style={{ fontSize: "3rem" }}>
                Get in Touch
              </h3>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </Col>
                <Col lg="12" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                    type="text"
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>

          <Col lg="5" className="mb-5" style={{ marginTop: "10rem" }}>
            <p className="emailDetails">
              <BsHouseDoor
                style={{ width: "2.8rem", height: "2.8rem", color: "#555" }}
              />
              No 5 & 7 Eddynumbers Avenue,
              <br /> Eedu, Agbara, Ogun State. Nigeria
            </p>
            <p className="emailDetails">
              <AiOutlineMail
                style={{ width: "2.8rem", height: "2.8rem", color: "#555" }}
              />
              <strong>nasdecroyalschools@yahoo.com</strong>
              <span>Send us your query anytime!</span>
            </p>
            <p className="emailDetails">
              <BsTelephone
                style={{ width: "2.8rem", height: "2.8rem", color: "#555" }}
              />
              <strong>+234 1 293 2252</strong>
              <span>Mon to Fri 8am to 4pm</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
