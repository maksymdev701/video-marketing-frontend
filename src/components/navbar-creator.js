import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useLogoutUserMutation } from "../redux/api/auth-api";
import Language from "./language";
import "./navbar-creator.css";

const NavbarCreator = (props) => {
  const [mobileShow, setMobileShow] = useState(false);

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
        navigate("/");
      }
    }
  }, [isLoading]);

  return (
    <div className={`navbar-creator-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-creator-navbar-interactive"
      >
        <Link to="/">
          <img
            alt={props.image_alt}
            src={props.logo}
            loading="eager"
            className="navbar-creator-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="navbar-creator-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="navbar-creator-nav"
          >
            <Link to="/creator" className="navbar-creator-navlink">
              {props.Creator}
            </Link>
            <Link to="/download" className="navbar-creator-navlink1">
              {props.Download}
            </Link>
            <Link to="/my-stats" className="navbar-creator-navlink2">
              {props.Stats}
            </Link>
            <Link to="/account" className="navbar-creator-navlink3">
              {props.Account}
            </Link>
            <Link to="/contact" className="navbar-creator-navlink4">
              {props.Contact1}
            </Link>
          </nav>
          <Language
            rootClassName="language-root-class-name"
            className=""
          ></Language>
          <button
            type="button"
            className="navbar-creator-button button"
            onClick={() => logoutUser()}
          >
            {props.logout}
          </button>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-creator-burger-menu"
          onClick={() => setMobileShow(!mobileShow)}
        >
          <svg viewBox="0 0 1024 1024" className="navbar-creator-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-creator-mobile-menu"
          style={{ display: mobileShow ? "block" : "none" }}
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-creator-nav1"
          >
            <div className="navbar-creator-container1">
              <img
                alt="image"
                src="/eurasia%20media%20logo.svg"
                className="navbar-creator-image1"
              />
              <div
                data-thq="thq-close-menu"
                className="navbar-creator-menu-close"
                onClick={() => setMobileShow(false)}
              >
                <svg viewBox="0 0 1024 1024" className="navbar-creator-icon02">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="navbar-creator-nav2"
            >
              <Link to="/creator" className="navbar-creator-navlink6">
                Creator
              </Link>
              <Link to="/download" className="navbar-creator-text">
                Download
              </Link>
              <Link to="/my-stats" className="navbar-creator-navlink5">
                My Stats
              </Link>
              <Link to="/account" className="navbar-creator-navlink7">
                Account
              </Link>
              <Link to="/contact" className="navbar-creator-navlink8">
                Contact
              </Link>
            </nav>
            <Language
              rootClassName="language-root-class-name4"
              className=""
            ></Language>
            <div className="navbar-creator-container2">
              <button
                type="button"
                className="button navbar-creator-button1"
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

NavbarCreator.defaultProps = {
  logout: "Log Out",
  Creator: "Creator",
  Contact1: "Contact",
  Download: "Download",
  Stats: "My Stats",
  Account: "Account",
  rootClassName: "",
  image_alt: "logo",
  logo: "/eurasia-logo-r.svg",
};

NavbarCreator.propTypes = {
  logout: PropTypes.string,
  Creator: PropTypes.string,
  Contact1: PropTypes.string,
  Download: PropTypes.string,
  Stats: PropTypes.string,
  Account: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  logo: PropTypes.string,
};

export default NavbarCreator;
