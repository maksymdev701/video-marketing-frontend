import React from 'react'

import { Helmet } from 'react-helmet'

import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>Forgot-Password - Eurasia Media Content</title>
        <meta
          property="og:title"
          content="Forgot-Password - Eurasia Media Content"
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
      <div className="forgot-password-container1">
        <span className="forgot-password-text">FORGOT PASSWORD</span>
        <span className="forgot-password-text1">
          Enter your email and we will send you a new password
        </span>
        <input
          type="text"
          placeholder="placeholder"
          className="forgot-password-textinput input"
        />
        <button type="button" className="forgot-password-button button">
          SEND
        </button>
        <button type="button" className="forgot-password-button1 button">
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword
