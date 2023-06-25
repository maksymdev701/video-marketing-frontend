import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import NavbarCreator from "../components/navbar-creator";
import ThumbnailMOB from "../components/thumbnail-mob";
import Footer from "../components/footer";
import { useGetDownloadableVideosQuery } from "../redux/api/video-api";
import FullScreenLoader from "../components/fullscreen-loader";

import "./download.css";

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
      <div className="download-heading-title">
        <h1 className="download-text">DOWNLOAD</h1>
        <div className="download-container1">
          <span className="download-text1">Downloads Remaining Today</span>
          <span className="download-text2">3/{data.day_download}</span>
        </div>
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
      <Footer rootClassName="footer-root-class-name12"></Footer>
    </div>
  );
};

export default Download;
