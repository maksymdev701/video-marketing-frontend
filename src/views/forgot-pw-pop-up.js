import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './forgot-pw-pop-up.css'

const ForgotPWPopUp = (props) => {
  return (
    <div className="forgot-p-pop-up-container">
      <Helmet>
        <title>Forgot-PW-PopUp - Eurasia Media Content</title>
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
      <div className="forgot-p-pop-up-container1">
        <span className="forgot-p-pop-up-text">FORGOT PASSWORD</span>
        <span className="forgot-p-pop-up-text1">
          Enter your email and we will send you a new password
        </span>
        <input
          type="text"
          placeholder="placeholder"
          className="forgot-p-pop-up-textinput input"
        />
        <Link to="/" className="forgot-p-pop-up-navlink button">
          SEND
        </Link>
        <Link to="/" className="forgot-p-pop-up-navlink1 button">
          CLOSE
        </Link>
      </div>
    </div>
  )
}

export default ForgotPWPopUp
