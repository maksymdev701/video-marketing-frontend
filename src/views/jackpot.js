import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import NavbarAdmin from "../components/navbar-admin";
import Footer from "../components/footer";
import {
  useUpdateJackpotMutation,
  useGetCreatorStatsQuery,
} from "../redux/api/stats-api";
import FullScreenLoader from "../components/fullscreen-loader";

import "./jackpot.css";

const Jackpot = (props) => {
  const [jackpot, setJackpot] = useState(0);
  const [editable, setEditable] = useState(false);
  const [updateJackpot, updateStates] = useUpdateJackpotMutation();
  const { isLoading, data, refetch } = useGetCreatorStatsQuery();

  useEffect(() => {
    if (updateStates.isSuccess) {
      toast.success("Jackpot updated successfully!");
      refetch();
    }
  }, [updateStates.isLoading]);

  if (isLoading) return <FullScreenLoader />;

  return (
    <div className="jackpot-container">
      <Helmet>
        <title>Jackpot - Eurasia Media Content</title>
        <meta property="og:title" content="Jackpot - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="jackpot-sticky-admin-nav-bar">
        <NavbarAdmin rootClassName="navbar-admin-root-class-name1"></NavbarAdmin>
      </div>
      <div className="jackpot-title">
        <h1 className="jackpot-text">Jackpot</h1>
      </div>
      <div className="jackpot-jackpot-figures">
        <div className="jackpot-card">
          <span className="jackpot-text01">
            <span className="Subheading">This Month&apos;s Jackpot</span>
            <br></br>
          </span>
          <div className="jackpot-container01">
            <div className="jackpot-jackpot">
              <div className="jackpot-container02">
                <div className="jackpot-container03">
                  <img
                    alt="image"
                    src="/jackpot7.svg"
                    className="jackpot-image"
                  />
                </div>
              </div>
              <h1 className="jackpot-text04 StatsBig">
                €{((data.jackpot / 5) * 4).toLocaleString()}
              </h1>
              <span className="jackpot-text05 StatTitle">Jackpot</span>
              <span className="jackpot-text06">Total cash pool this month</span>
            </div>
            <div className="jackpot-champ-bonus">
              <div className="jackpot-container04">
                <svg viewBox="0 0 1024 1024" className="jackpot-icon">
                  <path d="M832 192v-128h-640v128h-192v128c0 106.038 85.958 192 192 192 20.076 0 39.43-3.086 57.62-8.802 46.174 66.008 116.608 113.796 198.38 130.396v198.406h-64c-70.694 0-128 57.306-128 128h512c0-70.694-57.306-128-128-128h-64v-198.406c81.772-16.6 152.206-64.386 198.38-130.396 18.19 5.716 37.544 8.802 57.62 8.802 106.042 0 192-85.962 192-192v-128h-192zM192 436c-63.962 0-116-52.038-116-116v-64h116v64c0 40.186 7.43 78.632 20.954 114.068-6.802 1.246-13.798 1.932-20.954 1.932zM948 320c0 63.962-52.038 116-116 116-7.156 0-14.152-0.686-20.954-1.932 13.524-35.436 20.954-73.882 20.954-114.068v-64h116v64z"></path>
                </svg>
              </div>
              <h1 className="jackpot-text07 StatsBig">
                €{(data.jackpot / 5).toLocaleString()}
              </h1>
              <span className="jackpot-text08 StatTitle">Champions Bonus</span>
              <span className="jackpot-text09">Champions Bonus this month</span>
            </div>
            <div className="jackpot-videos-upload">
              <svg viewBox="0 0 1024 1024" className="jackpot-icon2">
                <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
              </svg>
              <h1 className="jackpot-text10 StatsBig">
                {data.total_uploads.toLocaleString()}
              </h1>
              <span className="jackpot-text11 StatTitle">Videos Uploaded</span>
              <span className="jackpot-text12">
                Videos uploaded by all creators
              </span>
            </div>
            <div className="jackpot-creators">
              <div className="jackpot-container05">
                <svg
                  viewBox="0 0 1022.8297142857142 1024"
                  className="jackpot-icon4"
                >
                  <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
                </svg>
              </div>
              <h1 className="jackpot-text13 StatsBig">
                {data.creators.toLocaleString()}
              </h1>
              <span className="jackpot-text14 StatTitle">Creators</span>
              <span className="jackpot-text15">Number of creators</span>
            </div>
          </div>
        </div>
      </div>
      <div className="jackpot-ranking-table">
        <div className="jackpot-ranking-title">
          <span className="jackpot-text16">CHAMPIONS RAKING</span>
        </div>
        <div className="jackpot-table-header">
          <div className="jackpot-container06">
            <span className="jackpot-position">#</span>
          </div>
          <div className="jackpot-container07">
            <span className="jackpot-text17">Creator</span>
          </div>
          <div className="jackpot-container08">
            <span className="jackpot-text18">Revenue Generated</span>
          </div>
          <div className="jackpot-container09">
            <span className="jackpot-text19">Video Uploads</span>
          </div>
        </div>
        <div className="jackpot-table-body">
          {data.champions.map((champion, index) => (
            <div className="jackpot-table-row" key={index}>
              <div className="jackpot-container10">
                <span className="jackpot-text20">{index + 1}</span>
              </div>
              <div className="jackpot-container11">
                <span className="jackpot-text21">{champion.creator}</span>
              </div>
              <div className="jackpot-container12">
                <span className="jackpot-text22">€5,000,000</span>
              </div>
              <div className="jackpot-container13">
                <span className="jackpot-text23">
                  {champion.uploads.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="jackpot-manual-inputs">
        <div className="jackpot-revenue-this-month">
          <span className="jackpot-text40">
            Input jackpot subsidy for this month
          </span>
          <input
            type="text"
            placeholder="Jackpot Value"
            className="jackpot-textinput input"
            disabled={!editable}
            defaultValue={data.jackpot}
            onChange={(e) => setJackpot(e.target.value)}
          />
          <button
            type="button"
            className="jackpot-button button"
            disabled={editable}
            onClick={() => setEditable(true)}
          >
            EDIT
          </button>
          <button
            className="jackpot-navlink button"
            disabled={!editable}
            onClick={() => {
              updateJackpot({ jackpot });
              setEditable(false);
            }}
          >
            CONFIRM
          </button>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  );
};

export default Jackpot;
