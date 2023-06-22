import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './new-user-pop-up.css'

const NewUserPopUp = (props) => {
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
      <div className="new-user-pop-up-container1">
        <span className="new-user-pop-up-text">NEW USER</span>
        <span className="new-user-pop-up-text1">
          Enter the information for each user. All fields are mandatory.
        </span>
        <span className="new-user-pop-up-text2">Name</span>
        <input
          type="text"
          placeholder="name"
          className="new-user-pop-up-textinput input"
        />
        <span className="new-user-pop-up-text3">Mobile</span>
        <input
          type="text"
          placeholder="mobile"
          className="new-user-pop-up-textinput1 input"
        />
        <span className="new-user-pop-up-text4">Email</span>
        <input
          type="text"
          placeholder="email"
          className="new-user-pop-up-textinput2 input"
        />
        <span className="new-user-pop-up-text5">Password</span>
        <input
          type="text"
          placeholder="password"
          className="new-user-pop-up-textinput3 input"
        />
        <div className="new-user-pop-up-creator">
          <input
            type="radio"
            name="radio"
            className="new-user-pop-up-radiobutton"
          />
          <span>Creator</span>
        </div>
        <div className="new-user-pop-up-admin">
          <input
            type="radio"
            name="radio"
            className="new-user-pop-up-radiobutton1"
          />
          <span>Admin</span>
        </div>
        <Link to="/users" className="new-user-pop-up-navlink button">
          SEND
        </Link>
        <Link to="/users" className="new-user-pop-up-navlink1 button">
          CLOSE
        </Link>
      </div>
    </div>
  )
}

export default NewUserPopUp
