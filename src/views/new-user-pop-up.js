import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import "./new-user-pop-up.css";
import { validateEmail, validatePhoneNumber, validateEmpty } from "../utils";
import { useCreateUserMutation } from "../redux/api/user-api";

const NewUserPopUp = (props) => {
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [createUser, { isLoading, isSuccess, isError, error, data }] =
    useCreateUserMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
      props.showFunc(false);
    }
    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(`${el.loc[1]}: ${el.msg}`, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error.data.detail, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.showFunc(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  if (!props.isShown) return null;

  const handleSend = () => {
    if (
      validateEmpty(name) ||
      validateEmpty(mobile) ||
      validateEmpty(email) ||
      validateEmpty(password) ||
      validateEmpty(role)
    ) {
      toast.error("Fill out all the inputs!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format!");
      return;
    }
    if (!validatePhoneNumber(mobile)) {
      toast.error("Invalid phone number!");
      return;
    }
    createUser({ name, email, mobile, password, role });
  };

  return (
    <div className="new-user-pop-up-container">
      <Helmet>
        <title>New-User-Pop-Up - Eurasia Media Content</title>
        <meta
          property="og:title"
          content="New-User-Pop-Up - Eurasia Media Content"
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
      <div className="new-user-pop-up-container1" ref={modalRef}>
        <span className="new-user-pop-up-text">NEW USER</span>
        <span className="new-user-pop-up-text1">
          Enter the information for each user. All fields are mandatory.
        </span>
        <span className="new-user-pop-up-text2">Name</span>
        <input
          type="text"
          placeholder="name"
          className="new-user-pop-up-textinput input"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="new-user-pop-up-text3">Mobile</span>
        <input
          type="text"
          placeholder="mobile"
          className="new-user-pop-up-textinput1 input"
          onChange={(e) => setMobile(e.target.value)}
        />
        <span className="new-user-pop-up-text4">Email</span>
        <input
          type="text"
          placeholder="email"
          className="new-user-pop-up-textinput2 input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="new-user-pop-up-text5">Password</span>
        <input
          type="password"
          placeholder="password"
          className="new-user-pop-up-textinput3 input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="new-user-pop-up-creator">
          <input
            type="radio"
            name="radio"
            value="creator"
            className="new-user-pop-up-radiobutton"
            onChange={(e) => setRole(e.target.value)}
          />
          <span>Creator</span>
        </div>
        <div className="new-user-pop-up-admin">
          <input
            type="radio"
            name="radio"
            value="admin"
            className="new-user-pop-up-radiobutton1"
            onChange={(e) => setRole(e.target.value)}
          />
          <span>Admin</span>
        </div>
        <button className="new-user-pop-up-navlink button" onClick={handleSend}>
          SEND
        </button>
        <button
          className="new-user-pop-up-navlink1 button"
          onClick={() => props.showFunc(false)}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

NewUserPopUp.propTypes = {
  isShown: PropTypes.bool,
  showFunc: PropTypes.func,
};

export default NewUserPopUp;
