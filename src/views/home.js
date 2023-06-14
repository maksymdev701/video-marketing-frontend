import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Language from '../components/language'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
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
            placeholder="placeholder"
            className="home-textinput input"
          />
        </div>
      </div>
      <div className="home-password">
        <div className="home-container02">
          <span className="home-text02">Password</span>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput1 input"
          />
        </div>
      </div>
      <div className="home-confirm">
        <Link to="/download" className="home-navlink button">
          CONFIRM
        </Link>
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
            placeholder="placeholder"
            className="home-textinput2 input"
          />
        </div>
      </div>
      <div className="home-email1">
        <div className="home-container05">
          <span className="home-text05">Email</span>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput3 input"
          />
        </div>
      </div>
      <span className="home-mobile-rules">
        <span>
          Input your mobile number like this: +area code SPACE mobile number.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
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
            placeholder="placeholder"
            className="home-textinput4 input"
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
            type="text"
            placeholder="placeholder"
            className="home-textinput5 input"
          />
        </div>
      </div>
      <div className="home-confirm-passwordf">
        <div className="home-container08">
          <span className="home-text11">Confirm Password</span>
          <input
            type="text"
            placeholder="placeholder"
            className="home-textinput6 input"
          />
        </div>
      </div>
      <div className="home-confirm1">
        <Link to="/account" className="home-navlink1 button">
          CONFIRM
        </Link>
      </div>
      <div className="home-container09"></div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home