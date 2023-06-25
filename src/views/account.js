import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import NavbarCreator from "../components/navbar-creator";
import Channels from "../components/channels";
import Footer from "../components/footer";
import "./account.css";

const Account = () => {
  const [editable, setEditable] = useState(false);
  const user = useSelector((state) => state.userState.user);

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
      <NavbarCreator rootClassName="navbar-creator-root-class-name2"></NavbarCreator>
      <div className="account-heading-title">
        <h1 className="account-text">ACCOUNT</h1>
        <div className="account-container01">
          <a
            href="#mobile"
            className="account-text01"
            onClick={() => {
              setEditable(true);
            }}
          >
            CHANGE EMAIL OR MOBILE
          </a>
          <Link to="/terms-privacy" className="account-text02">
            TERMS &amp; PRIVACY
          </Link>
        </div>
        <span className="account-text03">
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
        <span className="account-text04">MY SOCIAL MEDIA CHANNELS</span>
      </div>
      <div className="account-tik-tok">
        <div className="account-logo">
          <img alt="image" src="/tiktok.svg" className="account-image" />
          <span className="account-text05">TIKTOK</span>
        </div>
        <div className="account-container02">
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput01 input"
          />
          <div className="account-container03">
            <button type="button" className="account-button button">
              Add Channel
            </button>
            <button type="button" className="account-button01 button">
              SAVE
            </button>
          </div>
        </div>
      </div>
      <div className="account-you-tube">
        <div className="account-logo1">
          <svg viewBox="0 0 877.7142857142857 1024" className="account-icon">
            <path d="M525.143 744.571v-89.714c0-18.857-5.714-28.571-16.571-28.571-6.286 0-12.571 2.857-18.857 9.143v128c6.286 6.286 12.571 9.143 18.857 9.143 10.857 0 16.571-9.143 16.571-28zM630.286 674.857h37.714v-19.429c0-19.429-6.286-29.143-18.857-29.143s-18.857 9.714-18.857 29.143v19.429zM304 522.857v40h-45.714v241.714h-42.286v-241.714h-44.571v-40h132.571zM418.857 594.857v209.714h-38.286v-22.857c-14.857 17.143-29.143 25.714-43.429 25.714-12 0-20.571-5.143-24-16-2.286-6.286-3.429-16-3.429-30.857v-165.714h37.714v154.286c0 8.571 0 13.714 0.571 14.857 0.571 5.714 3.429 8.571 8.571 8.571 8 0 15.429-5.714 24-17.714v-160h38.286zM562.857 658.286v83.429c0 18.857-1.143 33.143-4 41.714-4.571 16-14.857 24-30.286 24-13.143 0-26.286-8-38.857-23.429v20.571h-38.286v-281.714h38.286v92c12-14.857 25.143-22.857 38.857-22.857 15.429 0 25.714 8 30.286 24 2.857 8.571 4 22.286 4 42.286zM706.286 732v5.143c0 12.571-0.571 20.571-1.143 24.571-1.143 8.571-4 16-8.571 22.857-10.286 15.429-26.286 22.857-45.714 22.857-20 0-35.429-7.429-46.286-21.714-8-10.286-12-26.857-12-49.143v-73.714c0-22.286 3.429-38.286 11.429-49.143 10.857-14.286 26.286-21.714 45.714-21.714 18.857 0 34.286 7.429 44.571 21.714 8 10.857 12 26.857 12 49.143v43.429h-76v37.143c0 19.429 6.286 29.143 19.429 29.143 9.143 0 14.857-5.143 17.143-14.857 0-2.286 0.571-10.857 0.571-25.714h38.857zM448.571 261.143v89.143c0 19.429-6.286 29.143-18.286 29.143-12.571 0-18.286-9.714-18.286-29.143v-89.143c0-19.429 5.714-29.714 18.286-29.714 12 0 18.286 10.286 18.286 29.714zM753.143 668.571v0c0-49.143 0-101.143-10.857-148.571-8-33.714-35.429-58.286-68-61.714-77.714-8.571-156.571-8.571-235.429-8.571-78.286 0-157.143 0-234.857 8.571-33.143 3.429-60.571 28-68 61.714-10.857 47.429-11.429 99.429-11.429 148.571v0c0 48.571 0 100.571 11.429 148.571 7.429 33.143 34.857 57.714 67.429 61.714 78.286 8.571 157.143 8.571 235.429 8.571s157.143 0 235.429-8.571c32.571-4 60-28.571 67.429-61.714 11.429-48 11.429-100 11.429-148.571zM321.714 296.571l51.429-169.143h-42.857l-29.143 111.429-30.286-111.429h-44.571c8.571 26.286 18.286 52.571 26.857 78.857 13.714 40 22.286 69.714 26.286 90.286v114.857h42.286v-114.857zM486.857 342.857v-74.286c0-22.286-4-38.857-12-49.714-10.857-14.286-25.714-21.714-44.571-21.714-19.429 0-34.286 7.429-44.571 21.714-8 10.857-12 27.429-12 49.714v74.286c0 22.286 4 38.857 12 49.714 10.286 14.286 25.143 21.714 44.571 21.714 18.857 0 33.714-7.429 44.571-21.714 8-10.286 12-27.429 12-49.714zM590.286 411.429h38.286v-211.429h-38.286v161.714c-8.571 12-16.571 17.714-24 17.714-5.143 0-8.571-2.857-9.143-9.143-0.571-1.143-0.571-5.714-0.571-14.857v-155.429h-38.286v167.429c0 14.857 1.143 24.571 3.429 31.429 4 10.286 12.571 15.429 24.571 15.429 14.286 0 28.571-8.571 44-25.714v22.857zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
          <span className="account-text06">YOUTUBE</span>
        </div>
        <div className="account-container04">
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput02 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput03 input"
          />
          <div className="account-container05">
            <button type="button" className="account-button02 button">
              Add Channel
            </button>
            <button type="button" className="account-button03 button">
              SAVE
            </button>
          </div>
        </div>
      </div>
      <div className="account-facebook">
        <div className="account-logo2">
          <svg viewBox="0 0 877.7142857142857 1024" className="account-icon2">
            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
          </svg>
          <span className="account-text07">FACEBOOK</span>
        </div>
        <div className="account-container06">
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput04 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput05 input"
          />
          <div className="account-container07">
            <button type="button" className="account-button04 button">
              Add Channel
            </button>
            <button type="button" className="account-button05 button">
              SAVE
            </button>
          </div>
        </div>
      </div>
      <div className="account-channels">
        <div className="account-logo3">
          <svg viewBox="0 0 1024 1024" className="account-icon4">
            <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
          </svg>
          <span className="account-text08">INSTAGRAM</span>
        </div>
        <div className="account-container08">
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput06 input"
          />
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput07 input"
          />
          <div className="account-container09">
            <button type="button" className="account-button06 button">
              Add Channel
            </button>
            <button type="button" className="account-button07 button">
              SAVE
            </button>
          </div>
        </div>
      </div>
      <Channels></Channels>
      <div className="account-subtitle1">
        <span className="account-text09">PROFILE</span>
      </div>
      <div className="account-name">
        <div className="account-container10">
          <span className="account-text10">Name</span>
          <span className="account-text11">Taylor Swift</span>
        </div>
      </div>
      <div id="mobile" className="account-mobile">
        <div className="account-container11">
          <span className="account-text12">Mobile</span>
          {editable ? (
            <input
              defaultValue={user.mobile}
              type="text"
              className="account-textinput input"
            />
          ) : (
            <span className="account-text13">{user.mobile}</span>
          )}
        </div>
        <button
          type="button"
          className={`${
            editable ? "account-button10" : "account-button08"
          } button`}
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
        <div className="account-container12">
          <span className="account-text14">Email</span>
          {editable ? (
            <input
              defaultValue={user.email}
              type="text"
              className="account-textinput input"
            />
          ) : (
            <span className="account-text15">Taylor@gmail.com</span>
          )}
        </div>
        <button
          type="button"
          className={`${
            editable ? "account-button10" : "account-button09"
          } button`}
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
        <div className="account-container13">
          <span className="account-text16">CHANGE PASSWORD</span>
        </div>
        <div className="account-container14">
          <span className="account-text17">New Password</span>
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput08 input"
          />
        </div>
        <div className="account-container15">
          <span className="account-text18">Confirm Password</span>
          <input
            type="text"
            placeholder="placeholder"
            className="account-textinput09 input"
          />
        </div>
        <button type="button" className="account-button10 button">
          CHANGE
        </button>
      </div>
      <div className="account-container16"></div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  );
};

export default Account;
