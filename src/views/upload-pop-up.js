import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./upload-pop-up.css";

const UploadPopUp = (props) => {
  const inputFileRef = useRef(null);
  const modalRef = useRef(null);
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
    console.log(files);
  };

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      props.showFunc(false);
    }
  };

  const removeFile = (index) => {
    files.splice(index, 1);
    setFiles([...files]);
  };

  const calcSize = (size) => {
    return size < 1000000
      ? `${Math.floor(size / 1000)} KB`
      : `${Math.floor(size / 1000000)} MB`;
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  if (!props.isShown) return null;

  return (
    <div className="upload-pop-up-container">
      <div className="upload-pop-up-container1" ref={modalRef}>
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputFileRef}
          multiple
          onChange={handleFilesInputChange}
        />
        <div className="upload-pop-up-challenge-title">
          <span className="upload-pop-up-text">BULK UPLOAD</span>
          <span className="upload-pop-up-text1">
            Drag and drop files her or click to browse on your computer
          </span>
        </div>
        <div className="upload-pop-up-container2">
          <div
            className="upload-pop-up-container3"
            onClick={() => inputFileRef.current.click()}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <ul
              style={{
                width: "100%",
                height: "100%",
                overflow: "auto",
                padding: 10,
              }}
            >
              {files.map((file, index) => (
                <li
                  key={index}
                  style={{
                    listStyleType: "none",
                    backgroundColor: "#e0e0e0",
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ width: "50%", overflow: "hidden" }}>
                    {file.name}
                  </span>
                  <span style={{ flex: 1, textAlign: "right" }}>
                    {calcSize(file.size)}
                  </span>
                  <div style={{ width: "30%" }}></div>
                  <span
                    className="close-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    &times;
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className="upload-pop-up-navlink button"
            onClick={handleUpload}
          >
            UPLOAD
          </button>
        </div>
      </div>
    </div>
  );
};

UploadPopUp.propTypes = {
  isShown: PropTypes.bool,
  showFunc: PropTypes.func,
};

export default UploadPopUp;
