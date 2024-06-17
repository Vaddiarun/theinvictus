import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="footer-main-content">
        <div className="sec">
          <img
            className="footer-image-sizing"
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/Brand_Presentation_Invictus_V0_page-0001-removebg-preview-2.png"
            alt=""
          />
          <ul className="ul-footer-secion">
            <Link className="link-element-for-ul" to="/aboutus">
              <li>About</li>
            </Link>
            <Link className="link-element-for-ul" to="/contact-us">
              <li>ContactUs</li>
            </Link>
            <Link className="link-element-for-ul" to="/">
              <li>Home</li>
            </Link>
            <Link className="link-element-for-ul" to="/Services">
              <li>Services</li>
            </Link>
          </ul>

          <ul className="services-footer">
            <li>Why choose Invictus</li>
            <li>Traning with invictus</li>
            <li>Six dream destinations</li>
          </ul>
        </div>
        <hr />
        <h6
          style={{
            color: "#ffffff",
            marginLeft: "20px",
            marginTop: "25px",
            fontSize: "20px",
          }}
        >
          Copyright ©2024 Invictus Education{" "}
        </h6>
        <div className="bottom">
          <ul className="socaial-media-footer-ul">
            <li>
              <IoLogoInstagram className="social1" />
            </li>
            <li>
              {" "}
              <FaFacebook className="social1" />
            </li>
            <li>
              <FaLinkedinIn className="social1" />
            </li>
          </ul>
          <ul className="copy-right-bottom-section">
            <li>Investors </li>
            <hr />
            <li> Terms of use </li>
            <hr />
            <li>Disclaimer</li>
            <hr />
            <li>Privacy_policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}
