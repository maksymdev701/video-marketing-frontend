import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import "./download.css";

import NavbarCreator from "../components/navbar-creator";
import NavbarAdmin from "../components/navbar-admin";
import NavbarMarketeer from "../components/navbar-marketeer";
import ThumbnailMOB from "../components/thumbnail-mob";
import Footer from "../components/footer";
import FullScreenLoader from "../components/fullscreen-loader";

import { useGetDownloadableVideosQuery } from "../redux/api/video-api";
import { useSelector } from "react-redux";

const Download = () => {
  const { isLoading, isError, error, data } = useGetDownloadableVideosQuery();
  const user = useSelector((state) => state.userState.user);

  useEffect(() => {
    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(`${el.loc[1]}: ${el.msg}`, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error.data.detail, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);

  if (isLoading || !user) return <FullScreenLoader />;

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
      <div className="my-stats-sticky-nav-bar">
        {user.role === "creator" ? (
          <NavbarCreator rootClassName="navbar-creator-root-class-name4"></NavbarCreator>
        ) : user.role === "admin" ? (
          <NavbarAdmin rootClassName="navbar-admin-root-class-name" />
        ) : (
          <NavbarMarketeer />
        )}
      </div>
      <div className="download-stickhy-header">
        <div className="download-heading">
          <div className="download-text">
            <h1 className="download-text1">DOWNLOAD</h1>
            <div className="download-counter">
              <span className="download-text2">
                Remaining
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="download-text3">{3 - data.day_download}/3</span>
            </div>
          </div>
          <div className="download-thumbnails">
            {data.today_list.map((row, index) => (
              <div className="download-thumbs" key={index}>
                <video
                  poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                  className="download-video"
                ></video>
                <svg
                  viewBox="0 0 1024 1024"
                  className="download-icon"
                  onClick={() => {
                    navigator.clipboard.writeText(row.hashtags);
                  }}
                >
                  <path d="M810 896v-598h-468v598h468zM810 214q34 0 60 25t26 59v598q0 34-26 60t-60 26h-468q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h468zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="download-waterfall">
        <div className="download-container1">
          <span>
            After you select the videos, don&apos;t forget to click the copy the
            video&apos;s hashtags and paste them when you post the video.
          </span>
        </div>

        {data.videos.map((video) => (
          <ThumbnailMOB
            key={video._id}
            video_id={video._id}
            video_src={video.src}
            rootClassName="thumbnail-mob-root-class-name9"
          ></ThumbnailMOB>
        ))}
      </div>
      <Footer rootClassName="footer-root-class-name12"></Footer>
      <input style={{ position: "absolute", left: -9999 }} />
    </div>
  );
};

export default Download;
