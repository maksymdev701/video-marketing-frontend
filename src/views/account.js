import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import NavbarCreator from "../components/navbar-creator";
import NavbarMarketeer from "../components/navbar-marketeer";
import NavbarAdmin from "../components/navbar-admin";
import Channels from "../components/channels";
import Footer from "../components/footer";
import "./account.css";
import FullScreenLoader from "../components/fullscreen-loader";
import { useUpdateUserMutation } from "../redux/api/user-api";
import { validateEmpty, validateEmail, validatePhoneNumber } from "../utils";

const Account = () => {
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.userState.user);

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [updateUser, { isLoading, isError, error, isSuccess }] =
    useUpdateUserMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully!");
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

  if (!user) return <FullScreenLoader />;

  return (
    <div className="account-container">
      <Helmet>
        <title>Account - Eurasia Media Content</title>
        <meta property="og:title" content="Account - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="my-stats-sticky-nav-bar">
        {user.role === "creator" ? (
          <NavbarCreator rootClassName="navbar-creator-root-class-name4"></NavbarCreator>
        ) : user.role === "admin" ? (
          <NavbarAdmin rootClassName="navbar-admin-root-class-name" />
        ) : (
          <NavbarMarketeer />
        )}
      </div>
      <div className="account-heading-title">
        <h1 className="account-text">ACCOUNT</h1>
        {user.role === "creator" ? (
          <div className="account-creator-number">
            <span className="account-text01">Creator Hashtag</span>
            <span className="account-text02">{user.hashtag}</span>
          </div>
        ) : null}
        <div className="account-container1">
          <a
            href="#mobile"
            className="account-text03"
            onClick={() => {
              setEditable(true);
              setEmail(user.email);
              setMobile(user.mobile);
            }}
          >
            CHANGE EMAIL OR MOBILE
          </a>
          <Link to="/terms-privacy" className="account-text04">
            TERMS &amp; PRIVACY
          </Link>
        </div>
        <span className="account-text05">
          Please input your social media channel URLs so we can track your
          performance. You can add as many channels as you want on each
          platform.
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
      </div>
      <div className="account-subtitle">
        <span className="account-text06">MY SOCIAL MEDIA CHANNELS</span>
      </div>
      <div className="account-container2">
        <Channels text="TIKTOK" rootClassName="channels-root-class-name3">
          <img alt="image" src="/tiktok.svg" className="account-image" />
        </Channels>
        <Channels text="YOUTUBE" rootClassName="channels-root-class-name2">
          <svg viewBox="0 0 877.7142857142857 1024" className="account-icon">
            <path d="M525.143 744.571v-89.714c0-18.857-5.714-28.571-16.571-28.571-6.286 0-12.571 2.857-18.857 9.143v128c6.286 6.286 12.571 9.143 18.857 9.143 10.857 0 16.571-9.143 16.571-28zM630.286 674.857h37.714v-19.429c0-19.429-6.286-29.143-18.857-29.143s-18.857 9.714-18.857 29.143v19.429zM304 522.857v40h-45.714v241.714h-42.286v-241.714h-44.571v-40h132.571zM418.857 594.857v209.714h-38.286v-22.857c-14.857 17.143-29.143 25.714-43.429 25.714-12 0-20.571-5.143-24-16-2.286-6.286-3.429-16-3.429-30.857v-165.714h37.714v154.286c0 8.571 0 13.714 0.571 14.857 0.571 5.714 3.429 8.571 8.571 8.571 8 0 15.429-5.714 24-17.714v-160h38.286zM562.857 658.286v83.429c0 18.857-1.143 33.143-4 41.714-4.571 16-14.857 24-30.286 24-13.143 0-26.286-8-38.857-23.429v20.571h-38.286v-281.714h38.286v92c12-14.857 25.143-22.857 38.857-22.857 15.429 0 25.714 8 30.286 24 2.857 8.571 4 22.286 4 42.286zM706.286 732v5.143c0 12.571-0.571 20.571-1.143 24.571-1.143 8.571-4 16-8.571 22.857-10.286 15.429-26.286 22.857-45.714 22.857-20 0-35.429-7.429-46.286-21.714-8-10.286-12-26.857-12-49.143v-73.714c0-22.286 3.429-38.286 11.429-49.143 10.857-14.286 26.286-21.714 45.714-21.714 18.857 0 34.286 7.429 44.571 21.714 8 10.857 12 26.857 12 49.143v43.429h-76v37.143c0 19.429 6.286 29.143 19.429 29.143 9.143 0 14.857-5.143 17.143-14.857 0-2.286 0.571-10.857 0.571-25.714h38.857zM448.571 261.143v89.143c0 19.429-6.286 29.143-18.286 29.143-12.571 0-18.286-9.714-18.286-29.143v-89.143c0-19.429 5.714-29.714 18.286-29.714 12 0 18.286 10.286 18.286 29.714zM753.143 668.571v0c0-49.143 0-101.143-10.857-148.571-8-33.714-35.429-58.286-68-61.714-77.714-8.571-156.571-8.571-235.429-8.571-78.286 0-157.143 0-234.857 8.571-33.143 3.429-60.571 28-68 61.714-10.857 47.429-11.429 99.429-11.429 148.571v0c0 48.571 0 100.571 11.429 148.571 7.429 33.143 34.857 57.714 67.429 61.714 78.286 8.571 157.143 8.571 235.429 8.571s157.143 0 235.429-8.571c32.571-4 60-28.571 67.429-61.714 11.429-48 11.429-100 11.429-148.571zM321.714 296.571l51.429-169.143h-42.857l-29.143 111.429-30.286-111.429h-44.571c8.571 26.286 18.286 52.571 26.857 78.857 13.714 40 22.286 69.714 26.286 90.286v114.857h42.286v-114.857zM486.857 342.857v-74.286c0-22.286-4-38.857-12-49.714-10.857-14.286-25.714-21.714-44.571-21.714-19.429 0-34.286 7.429-44.571 21.714-8 10.857-12 27.429-12 49.714v74.286c0 22.286 4 38.857 12 49.714 10.286 14.286 25.143 21.714 44.571 21.714 18.857 0 33.714-7.429 44.571-21.714 8-10.286 12-27.429 12-49.714zM590.286 411.429h38.286v-211.429h-38.286v161.714c-8.571 12-16.571 17.714-24 17.714-5.143 0-8.571-2.857-9.143-9.143-0.571-1.143-0.571-5.714-0.571-14.857v-155.429h-38.286v167.429c0 14.857 1.143 24.571 3.429 31.429 4 10.286 12.571 15.429 24.571 15.429 14.286 0 28.571-8.571 44-25.714v22.857zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </Channels>
        <Channels text="FACEBOOK" rootClassName="channels-root-class-name">
          <svg viewBox="0 0 877.7142857142857 1024" className="account-icon2">
            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
          </svg>
        </Channels>
        <Channels text="INSTAGRAM">
          <svg viewBox="0 0 877.7142857142857 1024" className="account-icon4">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </Channels>
        <Channels>
          <svg viewBox="0 0 950.8571428571428 1024" className="account-icon6">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </Channels>
      </div>
      <div className="account-subtitle1">
        <span className="account-text09">PROFILE</span>
      </div>
      <div className="account-user-info">
        <div id="mobile" className="account-name">
          <div className="account-container3">
            <span className="account-text08">Name</span>
            <span className="account-text09">{user.name}</span>
          </div>
        </div>
        <div className="account-mobile">
          <div className="account-container4">
            <span className="account-text10">Mobile</span>
            {editable ? (
              <input
                value={mobile}
                type="text"
                className="account-textinput input"
                onChange={(e) => setMobile(e.target.value)}
              />
            ) : (
              <span className="account-text11">{user.mobile}</span>
            )}
          </div>
          <span className="account-mobile-rules">
            <span>
              Input your mobile number like this: +area code SPACE mobile
              number.  
            </span>
            <span>Example: &quot;+33 555555555&quot;</span>
          </span>
          <button
            type="button"
            className={`${
              editable ? "account-button2" : "account-button"
            } button`}
            disabled={!editable}
            onClick={() => {
              if (validateEmpty(mobile)) {
                toast.error("Mobile field can't be empty!");
                return;
              }
              if (!validatePhoneNumber(mobile)) {
                toast.error("Input valid mobile format!");
                return;
              }
              updateUser({ field_name: "mobile", field_data: mobile });
            }}
          >
            Change
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </button>
        </div>
        <div className="account-email">
          <div className="account-container5">
            <span className="account-text14">Email</span>
            {editable ? (
              <input
                value={email}
                type="text"
                className="account-textinput input"
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span className="account-text15">{user.email}</span>
            )}
          </div>
          <button
            type="button"
            className={`${
              editable ? "account-button2" : "account-button"
            } button`}
            disabled={!editable}
            onClick={() => {
              if (validateEmpty(email)) {
                toast.error("Email field can't be empty!");
                return;
              }
              if (!validateEmail(email)) {
                toast.error("Input valid email format!");
                return;
              }
              updateUser({ field_name: "email", field_data: email });
            }}
          >
            Change
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </button>
        </div>
        <div className="account-change-password">
          <div className="account-container6">
            <span className="account-text16">CHANGE PASSWORD</span>
          </div>
          <span className="account-password-rules">
            Password must be minimum 8 characters, include upper-case,
            lower-case, a number and a special character
          </span>
          <div className="account-container7">
            <span className="account-text17">New Password</span>
            <input
              type="password"
              placeholder="Password"
              className="account-textinput input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="account-container8">
            <span className="account-text18">Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm"
              className="account-textinput1 input"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="account-button2 button"
            onClick={() => {
              if (validateEmpty(password)) {
                toast.error("Password can't be empty!");
                return;
              }
              if (password !== confirm) {
                toast.error("Password doesn't match!");
                return;
              }
              updateUser({ field_name: "password", field_data: password });
            }}
          >
            CHANGE
          </button>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name10"></Footer>
    </div>
  );
};

export default Account;
