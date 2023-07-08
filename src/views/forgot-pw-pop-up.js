import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import "./forgot-pw-pop-up.css";
import { useResetPasswordMutation } from "../redux/api/auth-api";

const ForgotPWPopUp = (props) => {
  const [email, setEmail] = useState("");
  const modalRef = useRef(null);

  const [resetPassword, { isLoading, isSuccess, isError, error }] =
    useResetPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Reset request success! Please check your email.");
      props.setShow(false);
    }
    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(`${el.loc[1]}: ${el.msg}`)
        );
      } else {
        toast.error(error.data.detail);
      }
    }
  }, [isLoading]);

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
      className="forgot-p-pop-up-container"
      style={{ display: props.show ? "flex" : "none" }}
    >
      <Helmet>
        {/* <title>Forgot-PW-PopUp - Eurasia Media Content</title> */}
        <meta
          property="og:title"
          content="Forgot-PW-PopUp - Eurasia Media Content"
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
      <div className="forgot-p-pop-up-container1" ref={modalRef}>
        <span className="forgot-p-pop-up-text">FORGOT PASSWORD</span>
        <span className="forgot-p-pop-up-text1">
          Enter your email and we will send you a new password
        </span>
        <input
          type="text"
          placeholder="Email Address"
          className="forgot-p-pop-up-textinput input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="forgot-p-pop-up-navlink button"
          onClick={() => {
            resetPassword({ email });
          }}
        >
          SEND
        </button>
        <button
          className="forgot-p-pop-up-navlink1 button"
          onClick={() => props.setShow(false)}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

ForgotPWPopUp.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default ForgotPWPopUp;
