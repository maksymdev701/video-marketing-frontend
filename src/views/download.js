import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarCreator from '../components/navbar-creator'
import ThumbnailMOB from '../components/thumbnail-mob'
import Footer from '../components/footer'
import './download.css'

const Download = (props) => {
  return (
    <div className="download-container">
      <Helmet>
        <title>Download - Eurasia Media Content</title>
        <meta property="og:title" content="Download - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <NavbarCreator rootClassName="navbar-creator-root-class-name"></NavbarCreator>
      <div className="download-heading-title">
        <h1 className="download-text">DOWNLOAD</h1>
        <span>You can only download three videos per day</span>
      </div>
      <div className="download-waterfall">
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name9"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name1"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name2"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name19"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name18"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name17"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name16"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name15"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name14"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name13"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name12"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name11"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name10"></ThumbnailMOB>
        <ThumbnailMOB rootClassName="thumbnail-mob-root-class-name"></ThumbnailMOB>
      </div>
      <div className="download-container1"></div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Download
