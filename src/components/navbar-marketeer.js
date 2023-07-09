import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/api/auth-api";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "./navbar-marketeer.css";

import Language from "./language";

const NavbarMarketeer = (props) => {
  const [showMobile, setShowMobile] = useState(false);

  const [logoutUser, { isLoading, isSuccess, error, isError }] =
    useLogoutUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout successfully!");
      navigate("/");
    }

    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error.data.detail, {
          position: "top-right",
        });
      }
      navigate("/");
    }
  }, [isLoading]);

  return (
    <div className="navbar-marketeer-container">
      <header
        data-thq="thq-navbar"
        className="navbar-marketeer-navbar-interactive"
      >
        <Link to="/">
          <img
            alt={props.image_alt}
            src={props.image_src}
            loading="eager"
            className="navbar-marketeer-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="navbar-marketeer-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="navbar-marketeer-nav"
          >
            <Link to="/download" className="navbar-marketeer-navlink">
              {props.text}
            </Link>
            <Link to="/my-stats" className="navbar-marketeer-navlink1">
              {props.text1}
            </Link>
            <Link to="/account" className="navbar-marketeer-navlink2">
              {props.text3}
            </Link>
          </nav>
          <Language rootClassName="language-root-class-name1"></Language>
          <button
            type="button"
            className="navbar-marketeer-button button"
            onClick={() => logoutUser()}
          >
            {props.button}
          </button>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-marketeer-burger-menu"
          onClick={() => setShowMobile(!showMobile)}
        >
          <svg viewBox="0 0 1024 1024" className="navbar-marketeer-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-marketeer-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-marketeer-nav1"
          >
            <div className="navbar-marketeer-container1">
              <img
                alt={props.image_alt1}
                src={props.image_src1}
                className="navbar-marketeer-image1"
              />
              <div
                data-thq="thq-close-menu"
                className="navbar-marketeer-menu-close"
                onClick={() => setShowMobile(false)}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-marketeer-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="navbar-marketeer-nav2"
            >
              <Link to="/donwload" className="navbar-marketeer-text">
                {props.text}
              </Link>
              <Link to="/my-stats" className="navbar-marketeer-text1">
                {props.text1}
              </Link>
              <Link to="/account" className="navbar-marketeer-text2">
                {props.text3}
              </Link>
            </nav>
            <Language rootClassName="language-root-class-name1"></Language>
            <div className="navbar-marketeer-container2">
              <button
                type="button"
                className="button"
                onClick={() => logoutUser()}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

NavbarMarketeer.defaultProps = {
  button: "Log Out",
  text: "Download",
  image_src1:
    "https://presentation-website-assets.teleporthq.io/logos/logo.png",
  text7: "Team",
  Register: "Register",
  text1: "My Stats",
  text3: "Account",
  text8: "Blog",
  image_alt: "logo",
  text5: "Features",
  image_alt1: "image",
  image_src: "/eurasia-logo-r.svg",
  text6: "Pricing",
  text4: "About",
  Login: "Login",
  text2: "Creator Stats",
};

NavbarMarketeer.propTypes = {
  button: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  text7: PropTypes.string,
  Register: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  image_alt: PropTypes.string,
  text5: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  Login: PropTypes.string,
  text2: PropTypes.string,
};

export default NavbarMarketeer;
