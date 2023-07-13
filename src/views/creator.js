import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavbarCreator from "../components/navbar-creator";
import Footer from "../components/footer";
import UploadPopup from "./upload-pop-up";
import FullScreenLoader from "../components/fullscreen-loader";
import { useGetCreatorStatsQuery } from "../redux/api/stats-api";

import "./creator.css";

const Creator = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { isLoading, isError, error, data } = useGetCreatorStatsQuery();

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
      <div className="my-stats-sticky-nav-bar">
        <NavbarCreator rootClassName="navbar-creator-root-class-name7"></NavbarCreator>
      </div>
      <div className="creator-heading-title">
        <h1 className="creator-text">CREATOR DASHBOARD</h1>
        <button
          className="creator-navlink button"
          onClick={() => setShowPopup(true)}
        >
          UPLOAD VIDEOS
        </button>
      </div>
      <div className="creator-prizes">
        <div className="creator-uploads-prize">
          <span className="creator-text01 Subheading">Jackpot</span>
          <span className="creator-text02">
            We share part of the revenue from our collective efforts with our
            Creators. 80% goes into the Jackpot Cash Pool, which is divided
            proportionally among all creators according to the number of videos
            they uploaded. The prizes are distributed on the third day of the
            following month.
          </span>
          <div className="creator-container01">
            <div className="creator-jackpot">
              <div className="creator-container02">
                <div className="creator-container03">
                  <img
                    alt="image"
                    src="/jackpot7.svg"
                    className="creator-image"
                  />
                </div>
              </div>
              <h1 className="creator-text03 StatsBig">
                €{((data.jackpot / 5) * 4).toLocaleString()}
              </h1>
              <span className="creator-text04 StatTitle">Jackpot</span>
              <span className="creator-text05">Total cash pool this month</span>
            </div>
            <div className="creator-my-prize">
              <div className="creator-container04">
                <img
                  alt="image"
                  src="/moneybag.svg"
                  className="creator-image1"
                />
              </div>
              <h1 className="creator-text06 StatsBig">
                €{data.cash_prize_1.toLocaleString()}
              </h1>
              <span className="creator-text07 StatTitle">Cash Prize</span>
              <span className="creator-text08">
                Your cash prize at this moment
              </span>
            </div>
            <div className="creator-my-uploads">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="creator-icon"
              >
                <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
              </svg>
              <h1 className="creator-text09">
                {data.month_uploads.toLocaleString()}
              </h1>
              <span className="creator-text10 StatTitle">Month Uploads</span>
              <span className="creator-text11">
                Videos you uploaded this month
              </span>
            </div>
            <div className="creator-videos-upload">
              <svg viewBox="0 0 1024 1024" className="creator-icon02">
                <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
              </svg>
              <h1 className="creator-text12 StatsBig">
                {data.total_uploads.toLocaleString()}
              </h1>
              <span className="creator-text13 StatTitle">Videos Uploaded</span>
              <span className="creator-text14">
                Videos uploaded by all creators
              </span>
            </div>
          </div>
        </div>
        <div className="creator-revenue-prize">
          <span className="creator-text15 Subheading">Champions Bonus</span>
          <span className="creator-text16">
            We share part of the revenue from our collective efforts with our
            Creators. 20% goes into the Champions Bonus Cash Pool, which is
            divided among the top five creators according to to how much revenue
            their videos generated. The prizes are distributed on the third day
            of the following month.
          </span>
          <div className="creator-container05">
            <div className="creator-my-prize1">
              <div className="creator-container06">
                <svg viewBox="0 0 1024 1024" className="creator-icon04">
                  <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                </svg>
              </div>
              <h1 className="creator-text17 StatsBig">
                €{(data.jackpot / 5).toLocaleString()}
              </h1>
              <span className="creator-text18 StatTitle">Champions Bonus</span>
              <span className="creator-text19">
                Your cash prize at this moment
              </span>
            </div>
            <div className="creator-my-prize2">
              <div className="creator-container07">
                <img
                  alt="image"
                  src="/moneybag.svg"
                  className="creator-image2"
                />
              </div>
              <h1 className="creator-text20 StatsBig">
                €{data.cash_prize_2.toLocaleString()}
              </h1>
              <span className="creator-text21 StatTitle">Cash Prize</span>
              <span className="creator-text22">
                Your cash prize at this moment
              </span>
            </div>
            <div className="creator-ranking">
              <div className="creator-container08">
                <img alt="image" src="/podium.svg" className="creator-image3" />
              </div>
              <h1 className="creator-text23 StatsBig">{data.ranking}</h1>
              <span className="creator-text24 StatTitle">Ranking</span>
              <span className="creator-text25">My position in the ranking</span>
            </div>
            <div className="creator-creators">
              <div className="creator-container09">
                <svg
                  viewBox="0 0 1022.8297142857142 1024"
                  className="creator-icon06"
                >
                  <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
                </svg>
              </div>
              <h1 className="creator-text26 StatsBig">
                {data.creators.toLocaleString()}
              </h1>
              <span className="creator-text27 StatTitle">Creators</span>
              <span className="creator-text28">Number of competitors</span>
            </div>
          </div>
        </div>
      </div>
      <div className="creator-ranking-table">
        <div className="creator-ranking-title">
          <span className="creator-text29">CHAMPIONS RAKING</span>
        </div>
        <div className="creator-table-header">
          <div className="creator-container10">
            <span className="creator-position">#</span>
          </div>
          <div className="creator-container11">
            <span className="creator-text30">Creator</span>
          </div>
          <div className="creator-container12">
            <span className="creator-text31">Revenue Generated</span>
          </div>
          <div className="creator-container13">
            <span className="creator-text32">Video Uploads</span>
          </div>
        </div>
        <div className="creator-table-body">
          {data.champions.map((champion, index) => (
            <div className="creator-table-row" key={index}>
              <div className="creator-container14">
                <span className="creator-text33">{index + 1}</span>
              </div>
              <div className="creator-container15">
                <span className="creator-text34">{champion.creator}</span>
              </div>
              <div className="creator-container16">
                <span className="creator-text35">
                  €
                  {(
                    (data.jackpot / 5 / data.total_uploads) *
                    champion.uploads
                  ).toLocaleString()}
                </span>
              </div>
              <div className="creator-container17">
                <span className="creator-text36">
                  {champion.uploads.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="creator-container34">
        <h1 className="creator-text53">All-time Statistics</h1>
        <div className="creator-dashboard1">
          <div className="creator-videos-upload1">
            <svg viewBox="0 0 1024 1024" className="creator-icon08">
              <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
            </svg>
            <h1 className="creator-text54 StatsBig">
              {data.uploads.toLocaleString()}
            </h1>
            <span className="creator-text55 StatTitle">Videos Uploaded</span>
            <span className="creator-text56">
              All-time videos you uploaded
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </div>
          <div className="creator-views">
            <div className="creator-container35">
              <div className="creator-container36">
                <img
                  alt="image"
                  src="/jackpot7%20w.svg"
                  className="creator-image4"
                />
              </div>
            </div>
            <h1 className="creator-text57 StatsBig">
              €{((data.jackpot / 5) * 4).toLocaleString()}
            </h1>
            <span className="creator-text58 StatTitle">Jackpot</span>
            <span className="creator-text59">All-time emoney made</span>
          </div>
          <div className="creator-likes">
            <div className="creator-container37">
              <svg viewBox="0 0 1024 1024" className="creator-icon10">
                <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
              </svg>
            </div>
            <h1 className="creator-text60 StatsBig">
              €{(data.jackpot / 5).toLocaleString()}
            </h1>
            <span className="creator-text61 StatTitle">Champions Bonus</span>
            <span className="creator-text62">All-time money made</span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name13"></Footer>
      <UploadPopup isShown={showPopup} showFunc={setShowPopup} />
    </div>
  );
};

export default Creator;
