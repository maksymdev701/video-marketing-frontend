import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarCreator from '../components/navbar-creator'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
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
      <div className="contact-container1">
        <span className="contact-text2"> All fields are mandatory.</span>
        <span className="contact-text3">Name</span>
        <input
          type="text"
          placeholder="name"
          className="contact-textinput input"
        />
        <span className="contact-text4">Email used for registration</span>
        <input
          type="text"
          placeholder="email"
          className="contact-textinput1 input"
        />
        <span className="contact-text5">Message</span>
        <textarea
          placeholder="placeholder"
          className="contact-textarea textarea"
        ></textarea>
        <span className="contact-text6">Type of user</span>
        <div className="contact-type-of-user">
          <div className="contact-creator">
            <input type="radio" name="radio" className="contact-radiobutton" />
            <span>Creator</span>
          </div>
          <div className="contact-admin">
            <input type="radio" name="radio" className="contact-radiobutton1" />
            <span>Admin</span>
          </div>
        </div>
        <button type="button" className="contact-button button">
          SEND
        </button>
        <button type="button" className="contact-button1 button">
          CLOSE
        </button>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default Contact
