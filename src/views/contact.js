import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import "./contact.css";

import NavbarCreator from "../components/navbar-creator";
import Footer from "../components/footer";
import FullScreenLoader from "../components/fullscreen-loader";
import { validateEmpty, validateEmail } from "../utils";
import { useMakeContactMutation } from "../redux/api/user-api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const formRef = useRef(null);

  const [makeContact, { isSuccess, isLoading, isError, error }] =
    useMakeContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Email sent successfully.");
      formRef.current.reset();
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

  const handleSumbit = (event) => {
    event.preventDefault();
    if (
      validateEmpty(name) ||
      validateEmpty(email) ||
      validateEmpty(message) ||
      validateEmpty(role)
    ) {
      toast.error("Fill out all the inputs!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    makeContact({ name, email, message, role });
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Eurasia Media Content</title>
        <meta property="og:title" content="Contact - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="contact-sticky-nav-bar">
        <NavbarCreator rootClassName="navbar-creator-root-class-name2"></NavbarCreator>
      </div>
      <div className="contact-heading-title">
        <h1 className="contact-text">CONTACT</h1>
        <span className="contact-text1">
          Please tell us how we can help you
        </span>
      </div>
      <form
        className="contact-container1"
        onSubmit={handleSumbit}
        ref={formRef}
      >
        <span className="contact-text2"> All fields are mandatory.</span>
        <span className="contact-text3">Name</span>
        <input
          type="text"
          placeholder="Name"
          className="contact-textinput input"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="contact-text4">Email used for registration</span>
        <input
          type="text"
          placeholder="email"
          className="contact-textinput1 input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="contact-text5">Message</span>
        <textarea
          placeholder="Message"
          className="contact-textarea textarea"
          onChange={(e) => setMessage(e.target.value)}
        />
        <span className="contact-text6">Type of user</span>
        <div className="contact-type-of-user">
          <div className="contact-creator">
            <input
              type="radio"
              name="radio"
              value="creator"
              className="contact-radiobutton"
              onChange={(e) => setRole(e.target.value)}
            />
            <span>Creator</span>
          </div>
          <div className="contact-admin">
            <input
              type="radio"
              name="radio"
              value="marketeer"
              className="contact-radiobutton1"
              onChange={(e) => setRole(e.target.value)}
            />
            <span>Marketeer</span>
          </div>
        </div>
        <button type="submit" className="contact-button button">
          SEND
        </button>
      </form>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  );
};

export default Contact;
