import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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

const Footer = () => {
  return (
    <div className="footer">
      <div class=" grid grid--footer">
        <div class="logo-col">
          <div
            className="logo"
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "5rem",
            }}
          >
            <Link to="/"> NASDEC School</Link>
          </div>

          <ul class="social-links">
            <li>
              <Link class="footer-link" to="/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ width: "2.4rem", height: "2.4rem" }}
                />
              </Link>
            </li>
            <li>
              <Link class="footer-link" to="/">
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

          <p class="copyright">
            Copyright &copy; <span class="year">2027</span> by Nasdec School.
            All rights reserved.
          </p>
        </div>

        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "1rem" }} />
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <FontAwesomeIcon icon={faAt} style={{ marginRight: "1rem" }} />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@nasdec.com
              </a>
            </p>
          </address>
        </div>

        <nav class="nav-col">
          <p class="footer-heading">About</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Director's Speech
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                History
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Why NASDEC
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Schools</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Nursery
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Primary
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                College
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <p class="footer-heading">Quick Links</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#">
                Facilities
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Admission
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
