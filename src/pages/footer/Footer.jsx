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
      <div className=" grid grid--footer">
        <div className="logo-col">
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
            Copyright &copy; <span class="year">2027</span> by Nasdec School.
            All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ width: "1.8rem", height: "1.8rem" }}
              />
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: "1rem" }} />
              <Link className="footer-link" to="tel:415-201-6370">
                415-201-6370
              </Link>
              <br />
              <FontAwesomeIcon icon={faAt} style={{ marginRight: "1rem" }} />
              <Link className="footer-link" to="mailto:hello@omnifood.com">
                hello@nasdec.com
              </Link>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">About</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="#">
                Director's Speech
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                History
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Why NASDEC
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Schools</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="#">
                Nursery
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Primary
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                College
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-nav">
            <li>
              <Link className="footer-link" to="#">
                Facilities
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Admission
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="#">
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
