import React from 'react'

import { Helmet } from 'react-helmet'

import './upload-popup.css'

const UploadPopup = (props) => {
  return (
    <div className="upload-popup-container">
      <Helmet>
        <title>Upload-Popup - Eurasia Media Content</title>
        <meta
          property="og:title"
          content="Upload-Popup - Eurasia Media Content"
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
      <div className="upload-popup-container1">
        <span className="upload-popup-text">Your files have been uploaded</span>
        <button type="button" className="upload-popup-button button">
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default UploadPopup
