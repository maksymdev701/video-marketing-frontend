import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import VideoThumbnail from "react-video-thumbnail";

import "./thumbnail-mob.css";

import { useDownloadVideoMutation } from "../redux/api/video-api";

const ThumbnailMOB = (props) => {
  const [downloadVideo, { isLoading, isSuccess, isError, error, data }] =
    useDownloadVideoMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Donwload Started!");
      fetch(`${process.env.REACT_APP_STATIC_URL}/uploads/${data.src}`)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${data.src}`);
          document.body.appendChild(link);
          link.click();
        });
    }
    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(`${el.loc[1]}: ${el.msg}`)
        );
      } else {
        toast.error(error, data.detail);
      }
    }
  }, [isLoading]);

  return (
    <div className={`thumbnail-mob-container ${props.rootClassName} `}>
      {/* <video
        src={`${process.env.REACT_APP_STATIC_URL}/uploads/${props.video_src}`}
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="thumbnail-mob-video"
      ></video> */}
      <div className="thumbnail-mob-video">
        <VideoThumbnail
          videoUrl={`${process.env.REACT_APP_STATIC_URL}/uploads/${props.video_src}`}
          width={135}
          height={180}
        />
      </div>
      <div className="thumbnail-mob-id-author">
        <span className="thumbnail-mob-text">{props.Brand}</span>
        <div className="thumbnail-mob-container1">
          <span className="thumbnail-mob-text1">{props.Commission}</span>
          <span className="thumbnail-mob-text2">{props.Reward}</span>
        </div>
      </div>
      <button
        type="button"
        className="thumbnail-mob-button button"
        onClick={() => downloadVideo({ video_id: props.video_id })}
      >
        {props.button}
      </button>
    </div>
  );
};

ThumbnailMOB.defaultProps = {
  rootClassName: "",
  button: "DOWNLOAD",
  Commission: "50%",
  text: "Video ID",
  Brand: "Eurasia Media",
  Reward: "€0",
};

ThumbnailMOB.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  Commission: PropTypes.string,
  text: PropTypes.string,
  Brand: PropTypes.string,
  Reward: PropTypes.string,
  video_src: PropTypes.string,
  video_id: PropTypes.string,
};

export default ThumbnailMOB;
