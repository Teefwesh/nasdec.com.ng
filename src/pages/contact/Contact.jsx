import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone, BsHouseDoor } from "react-icons/bs";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../image/contact.jpeg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Copywrite from "../../components/copywrite/Copywrite";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x6xnr0r",
        "template_7konwmi",
        formRef.current,
        "Yt8RUMLUvpTfl81m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
    toast.promise(resolveAfter3Sec, {
      pending: "Processing",
      success: "Message Sent Successfully",
      error: "Message rejected",
    });

    e.target.reset();

    // toast.success("Message Sent Successfully");
  };

  return (
    <div>
      <Navigation />

      <div className="imgHeader">
        <img
          src={Banner}
          alt="nasdec royal school building"
          id="overlay"
          style={{ height: "350px" }}
        />
        {/* <h1> Contact Us</h1> */}
      </div>

      <iframe
        id="gmap_canvas"
        title="Google map address to Nasdec Royal School"
        src="https://maps.google.com/maps?q=Nasdec%20Royal%20school&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        style={{ width: "100%", height: "500px", padding: "3rem 8%" }}
      ></iframe>

      <Container
        style={{
          fontSize: "1.8rem",
          padding: "5rem 6% 10rem",
        }}
      >
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="contact__form w-100"
            >
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
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
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
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btnButton ac_btn" type="submit">
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
              <strong>info@nasdec.com.ng</strong>
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

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />

      <Copywrite />
    </div>
  );
};

export default Contact;
