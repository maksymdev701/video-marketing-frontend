import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { useUploadVideoMutation } from "../redux/api/video-api";
import Spinner from "../components/spinner";

import "./upload-pop-up.css";
import { useSelector } from "react-redux";

const UploadPopUp = (props) => {
  const inputFileRef = useRef(null);
  const modalRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [hashValues, setHashValues] = useState("#ai4brands");
  const [uploadDisabled, setUploadDisabled] = useState(true);
  const user = useSelector((state) => state.userState.user);

  const [uploadVideo, uploadStates] = useUploadVideoMutation();

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles([...files, ...event.dataTransfer.files]);
  };

  const handleFilesInputChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    formData.append("hashtags", hashValues);
    uploadVideo(formData);
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

  useEffect(() => {
    if (uploadStates.isSuccess) {
      toast.success("Uploaded successfully!");
      setFiles([]);
      props.showFunc(false);
    }
  }, [uploadStates.isLoading]);

  if (!props.isShown) return null;

  return (
    <div className="upload-pop-up-container">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
        }}
      >
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
            <div className="hashtag-description__container">
              <div style={{ display: "flex", gap: 20, marginBottom: 10 }}>
                <span className="hashtag-description">
                  Add 3 to 5 more hashtags, separate them by a comma
                </span>
                <span style={{ flex: 1 }}>Creator Hashtag</span>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <input
                  className="hashtag-input"
                  value={hashValues}
                  onChange={(e) => {
                    setHashValues(e.target.value);
                    const hashArray = hashValues.trim().split(",");
                    setUploadDisabled(!(hashArray.length >= 3));
                  }}
                />
                <span className="hashtag-creator">{user.hashtag}</span>
              </div>
            </div>
            <div
              className="upload-pop-up-container3"
              onClick={() => inputFileRef.current.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
            >
              <ul className="files-container">
                {files.map((file, index) => (
                  <li key={index} className="file-item">
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
              disabled={uploadDisabled}
              onClick={handleUpload}
            >
              UPLOAD
            </button>
          </div>
          {uploadStates.isLoading ? (
            <div className="spinner-container">
              <Spinner />
            </div>
          ) : null}
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
