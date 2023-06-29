import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import "./download.css";

import NavbarCreator from "../components/navbar-creator";
import ThumbnailMOB from "../components/thumbnail-mob";
import Footer from "../components/footer";

import { useGetDownloadableVideosQuery } from "../redux/api/video-api";

const Download = () => {
  const { isLoading, isError, error, data } = useGetDownloadableVideosQuery();

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

  if (isLoading) return <FullScreenLoader />;
  console.log(data);

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
      <div className="download-sticky-nav-bar">
        <NavbarCreator rootClassName="navbar-creator-root-class-name7"></NavbarCreator>
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
              <span className="download-text3">3/3</span>
            </div>
          </div>
          <div className="download-thumbnails">
            <div className="download-thumbs">
              <video
                src
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                className="download-video"
              ></video>
              <svg viewBox="0 0 1024 1024" className="download-icon">
                <path d="M810 896v-598h-468v598h468zM810 214q34 0 60 25t26 59v598q0 34-26 60t-60 26h-468q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h468zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
              </svg>
            </div>
            <div className="download-thumbs1">
              <video
                src
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                className="download-video1"
              ></video>
              <svg viewBox="0 0 1024 1024" className="download-icon2">
                <path d="M810 896v-598h-468v598h468zM810 214q34 0 60 25t26 59v598q0 34-26 60t-60 26h-468q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h468zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
              </svg>
            </div>
            <div className="download-thumbs2">
              <video
                src
                poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                className="download-video2"
              ></video>
              <svg viewBox="0 0 1024 1024" className="download-icon4">
                <path d="M810 896v-598h-468v598h468zM810 214q34 0 60 25t26 59v598q0 34-26 60t-60 26h-468q-34 0-60-26t-26-60v-598q0-34 26-59t60-25h468zM682 42v86h-512v598h-84v-598q0-34 25-60t59-26h512z"></path>
              </svg>
            </div>
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
      <Footer rootClassName="footer-root-class-name12"></Footer>
    </div>
  );
};

export default Download;
