import React, { useRef, useState } from "react";

import { Helmet } from "react-helmet";

import NavbarCreator from "../components/navbar-creator";
import Footer from "../components/footer";
import "./creator.css";

const Creator = (props) => {
  const inputFileRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles([...files, ...event.dataTransfer.files]);
  };

  const handleFilesInputChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("files", files);
  };

  return (
    <div className="creator-container">
      <Helmet>
        <title>Creator - Eurasia Media Content</title>
        <meta property="og:title" content="Creator - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <NavbarCreator rootClassName="navbar-creator-root-class-name1"></NavbarCreator>
      <div className="creator-heading-title">
        <h1 className="creator-text">CREATOR STATS</h1>
      </div>
      <div className="creator-my-stats1">
        <div className="creator-stat">
          <svg viewBox="0 0 1024 1024" className="creator-icon">
            <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
          </svg>
          <h1 className="creator-text01 StatsBig">50,000,000</h1>
          <span className="creator-text02 StatTitle">Videos Uploaded</span>
          <span className="creator-text03">
            Total videos uploaded since sign up
          </span>
        </div>
        <div className="creator-stat1">
          <svg viewBox="0 0 950.8571428571428 1024" className="creator-icon2">
            <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
          </svg>
          <h1 className="creator-text04">99</h1>
          <span className="creator-text05 StatTitle">Uploads this Month</span>
          <span className="creator-text06">Videos uploaded this month</span>
        </div>
        <div className="creator-stat2">
          <svg viewBox="0 0 1024 1024" className="creator-icon4">
            <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
          </svg>
          <h1 className="creator-text07">500,000,000</h1>
          <span className="creator-text08 StatTitle">Total Views</span>
          <span className="creator-text09">Views of all videos combined</span>
        </div>
        <div className="creator-stat3">
          <svg viewBox="0 0 1024 1024" className="creator-icon6">
            <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
          </svg>
          <h1 className="creator-text10">1,300,000</h1>
          <span className="creator-text11 StatTitle">Likes this Month</span>
          <span className="creator-text12">Likes of all videos combined</span>
        </div>
      </div>
      <div className="creator-challenge-title">
        <span className="creator-text13">BULK UPLOAD</span>
        <span className="creator-text14">
          Drag and drop files her or click to browse on your computer
        </span>
      </div>
      <div className="creator-container1">
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputFileRef}
          multiple
          onChange={handleFilesInputChange}
        />
        <div
          className="creator-container2"
          onClick={() => inputFileRef.current.click()}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          <ul style={{ width: "100%" }}>
            {files.map((file, index) => (
              <li
                key={index}
                style={{
                  listStyleType: "none",
                  borderBottom: "1px solid black",
                  padding: 5,
                }}
              >
                {file.name}
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="creator-button button">
          UPLOAD
        </button>
      </div>
      <div className="creator-container3"></div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  );
};

export default Creator;
