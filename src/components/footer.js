import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./footer.css";

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <footer className="footer-footer1">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              alt={props.logo}
              src={props.image_src}
              className="footer-image"
            />
            <span className="footer-text">{props.slogan}</span>
          </div>
          <div className="footer-product-container">
            <Link to="/contact" className="footer-navlink">
              {props.Contact}
            </Link>
            <Link to="/terms-privacy" className="footer-navlink1">
              {props.terms}
            </Link>
          </div>
          <div className="footer-company-container">
            <span className="footer-text01">{props.adress}</span>
            <span className="footer-text02">
              <span className="">
                <span className="">
                  Tour La Villette,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">
                <span className="">
                  26 Rue Emile Reynaud
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">93300 Aubervilliers, France</span>
            </span>
          </div>
          <div className="footer-container1">
            <div className="footer-container2">
              <div className="footer-socials">
                <span className="footer-text14">{props.follow}</span>
                <div className="footer-icon-group">
                  <a
                    href="https://www.linkedin.com/company/eurasia-media-influencer-academy/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer-icon"
                    >
                      <path
                        d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@eurasiamedia?is_from_webapp=1&amp;sender_device=pc"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link1"
                  >
                    <img
                      alt="image"
                      src="/tiktok-wh-200h.png"
                      className="footer-image1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <span className="footer-text15">{props.copyright}</span>
      </footer>
    </footer>
  );
};

Footer.defaultProps = {
  copyright: "© 2023 Eurasia Media, All Rights Reserved.",
  terms: "Terms & Privacy",
  adress: "Eurasia Media",
  logo: "logo",
  slogan: "One-stop AI-commerce.",
  rootClassName: "",
  image_src: "/eurasia-logo-w.svg",
  follow: "Follow Us",
  Contact: "Contact",
  image_alt1: "image",
};

Footer.propTypes = {
  copyright: PropTypes.string,
  terms: PropTypes.string,
  adress: PropTypes.string,
  logo: PropTypes.string,
  slogan: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  follow: PropTypes.string,
  Contact: PropTypes.string,
  image_alt1: PropTypes.string,
};

export default Footer;
