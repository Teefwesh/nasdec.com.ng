import React from "react";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../image/logo.png";

const Footer = () => {
  return (
    <div className="footer" id="support">
      <div className=" grid grid--footer">
        <div className="logo-col">
          <div
            className="logo"
            style={{
              marginBottom: "5rem",
            }}
          >
            <Link to="/">
              <img
                src={Logo}
                alt="Nasdec Royal School Logo"
                style={{ width: "14rem", height: "13rem" }}
              />
            </Link>
          </div>

          <ul className="social-links">
            <li>
              <Link className="footer-link" to="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ width: "2.4rem", height: "2.4rem" }}
                />
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ width: "2.4rem", height: "2.4rem" }}
                />
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ width: "2.4rem", height: "2.4rem" }}
                />
              </Link>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span class="year">2022</span> by Nasdec Royal
            School. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  width: "1.8rem",
                  height: "1.8rem",
                  color: "#2424ba",
                }}
              />
              No 5 & 7 Eddynumbers Avenue, Eedu, Agbara, Ogun State. Nigeria
            </p>
            <p>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginRight: "1rem", color: "#2424ba" }}
              />
              <Link className="footer-link" to="">
                <b>+234 1 293 2252 </b>
              </Link>
              <br />
              <FontAwesomeIcon
                icon={faAt}
                style={{ marginRight: "1rem", color: "#2424ba" }}
              />
              <Link
                className="footer-link"
                to=""
                style={{ wordWrap: "break-word" }}
              >
                info@nasdec.com.ng
              </Link>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">About</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/#about">
                Director's Speech
              </Link>
            </li>

            <li>
              <Link className="footer-link" to="/#counter">
                Why NASDEC
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Schools</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/nursery">
                Nursery
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/basic">
                Basic
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/juniorcollege">
                Junior College
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/seniorcollege">
                Senior College
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/admissionguide">
                Admission
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contact">
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
