import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import "./terms-pop-up.css";

const TermsPopUp = (props) => {
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  return (
    <div
      className="terms-pop-up-container"
      style={{ display: props.show ? "flex" : "none" }}
    >
      <Helmet>
        <title>Terms-PopUp - Eurasia Media Content</title>
        <meta
          property="og:title"
          content="Terms-PopUp - Eurasia Media Content"
        />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="terms-pop-up-container1" ref={modalRef}>
        <div className="terms-pop-up-heading-title">
          <h1 className="terms-pop-up-text">TERMS AND PRIVACY</h1>
          <span className="terms-pop-up-text1">
            Please read carefully the Terms of Service and Privacy Policy
            (below)
          </span>
        </div>
        <div className="terms-pop-up-container2">
          <div className="terms-pop-up-terms">
            <span className="terms-pop-up-text2">Terms of Service</span>
            <span className="terms-pop-up-text3">
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;
            </span>
          </div>
          <div className="terms-pop-up-terms1">
            <span className="terms-pop-up-text4">Privacy Policy</span>
            <span className="terms-pop-up-text5">
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;
            </span>
          </div>
          <div className="terms-pop-up-terms2">
            <span className="terms-pop-up-text6">
              By clicking you agree to our Terms of Service and Privacy Policy
            </span>
            <button
              className="terms-pop-up-navlink button"
              onClick={() => {
                props.setAccept(true);
                props.setShow(false);
              }}
            >
              I ACCEPT 
            </button>
          </div>
          <button
            type="button"
            className="terms-pop-up-button button"
            onClick={() => props.setShow(false)}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

TermsPopUp.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  setAccept: PropTypes.func,
};

export default TermsPopUp;
