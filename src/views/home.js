import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import Language from "../components/language";
import Footer from "../components/footer";
import "./home.css";
import { validateEmail, validateEmpty, validatePhoneNumber } from "../utils";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/api/authApi";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginerror] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [registerError, setRegisterError] = useState("");

  const [loginUser, loginStates] = useLoginUserMutation();
  const [registerUser, registerStates] = useRegisterUserMutation();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignup = () => {
    if (
      validateEmpty(newName) ||
      validateEmpty(newEmail) ||
      validateEmpty(newMobile) ||
      validateEmpty(newPassword) ||
      validateEmpty(confirm)
    ) {
      setRegisterError("Please fill all the fields!");
      return;
    }
    if (!validateEmail(newEmail)) {
      setRegisterError("Please enter valid email format!");
      return;
    }
    if (!validatePhoneNumber(newMobile)) {
      setRegisterError("Please enter valid phone number!");
      return;
    }
    if (newPassword !== confirm) {
      setRegisterError("Password doesn't match!");
      return;
    }
    setRegisterError("");

    registerUser({
      name: newName,
      email: newEmail,
      mobile: newMobile,
      password: newPassword,
      passwordConfirm: confirm,
    });
  };

  useEffect(() => {
    if (registerStates.isSuccess) {
      toast.success("User registered successfully");
      setNewName("");
      setNewEmail("");
      setNewMobile("");
      setNewPassword("");
      setConfirm("");
    }
    if (registerStates.isError) {
      toast.error(registerStates.error.data.detail, {
        position: "top-right",
      });
    }
  }, [registerStates.isLoading]);

  const handleSignin = () => {
    if (validateEmpty(email) || validateEmpty(password)) {
      setLoginerror("Fill out all the fields!");
      return;
    }
    if (!validateEmail(email)) {
      setLoginerror("Input valid email format!");
      return;
    }
    setLoginerror("");
    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
    //   .then(({ data }) => {})
    //   .catch((err) => console.log(err));
    toast.success("User login successfully");
    navigate("/my-stats")
  };

  useEffect(() => {

  })

  return (
    <div className="home-container">
      <Helmet>
        <title>Eurasia Media Content</title>
        <meta property="og:title" content="Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="home-header">
        <img
          alt="image"
          src="/eurasia%20media%20logo.svg"
          className="home-image"
        />
        <Language></Language>
      </div>
      <div className="home-log-in">
        <h1 className="home-text">LOG IN</h1>
      </div>
      <div className="home-email">
        <div className="home-container01">
          <span className="home-text01">Email</span>
          <input
            type="text"
            placeholder="Input your Email"
            className="home-textinput input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="home-password">
        <div className="home-container02">
          <span className="home-text02">Password</span>
          <input
            type="password"
            placeholder="Input your password"
            className="home-textinput1 input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {loginError ? <div style={{ color: "red" }}>{loginError}</div> : null}
      <div className="home-confirm">
        <button className="home-navlink button" onClick={handleSignin}>
          Login
        </button>
      </div>
      <div className="home-forgot">
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          FORGOT PASSWORD
        </a>
      </div>
      <div className="home-container03"></div>
      <div className="home-sign-up">
        <h1 className="home-text03">SIGN UP</h1>
      </div>
      <div className="home-name">
        <div className="home-container04">
          <span className="home-text04">Name</span>
          <input
            type="text"
            placeholder="Input your Name"
            className="home-textinput2 input"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />
        </div>
      </div>
      <div className="home-email1">
        <div className="home-container05">
          <span className="home-text05">Email</span>
          <input
            type="text"
            placeholder="Input your Email"
            className="home-textinput3 input"
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
          />
        </div>
      </div>
      <span className="home-mobile-rules">
        <span>
          Input your mobile number like this: +area code SPACE mobile number.
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
        <br></br>
        <span>Example: &quot;+33 555555555&quot;</span>
      </span>
      <div className="home-mobile">
        <div className="home-container06">
          <span className="home-text09">Mobile</span>
          <input
            type="text"
            placeholder="Input your Mobile"
            className="home-textinput4 input"
            onChange={(e) => setNewMobile(e.target.value)}
            value={newMobile}
          />
        </div>
      </div>
      <span className="home-password-rules">
        Password must be minimum 8 characters, include upper-case, lower-case, a
        number and a special character
      </span>
      <div className="home-password1">
        <div className="home-container07">
          <span className="home-text10">Password</span>
          <input
            type="password"
            placeholder="Input your password"
            className="home-textinput5 input"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />
        </div>
      </div>
      <div className="home-confirm-passwordf">
        <div className="home-container08">
          <span className="home-text11">Confirm Password</span>
          <input
            type="password"
            placeholder="Confirm your password"
            className="home-textinput6 input"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
          />
        </div>
      </div>
      {registerError ? (
        <div style={{ color: "red" }}>{registerError}</div>
      ) : null}
      <div className="home-confirm1">
        <button className="home-navlink1 button" onClick={handleSignup}>
          Register
        </button>
      </div>
      <div className="home-container09"></div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Home;
