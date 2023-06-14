import React from 'react'

import { Helmet } from 'react-helmet'

import './new-user.css'

const NewUser = (props) => {
  return (
    <div className="new-user-container">
      <Helmet>
        <title>New-User - Eurasia Media Content</title>
        <meta property="og:title" content="New-User - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="new-user-container1">
        <span className="new-user-text">NEW USER</span>
        <span className="new-user-text1">
          Enter the information for each user. All fields are mandatory.
        </span>
        <span className="new-user-text2">Name</span>
        <input
          type="text"
          placeholder="name"
          className="new-user-textinput input"
        />
        <span className="new-user-text3">Mobile</span>
        <input
          type="text"
          placeholder="mobile"
          className="new-user-textinput1 input"
        />
        <span className="new-user-text4">Email</span>
        <input
          type="text"
          placeholder="email"
          className="new-user-textinput2 input"
        />
        <span className="new-user-text5">Password</span>
        <input
          type="text"
          placeholder="password"
          className="new-user-textinput3 input"
        />
        <div className="new-user-creator">
          <input type="radio" name="radio" className="new-user-radiobutton" />
          <span>Creator</span>
        </div>
        <div className="new-user-admin">
          <input type="radio" name="radio" className="new-user-radiobutton1" />
          <span>Admin</span>
        </div>
        <button type="button" className="new-user-button button">
          SEND
        </button>
        <button type="button" className="new-user-button1 button">
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default NewUser
