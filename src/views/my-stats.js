import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import NavbarCreator from "../components/navbar-creator";
import NavbarMarketeer from "../components/navbar-marketeer";
import Footer from "../components/footer";
import { getDateFromPydate } from "../utils";
import { useGetMyStatsQuery } from "../redux/api/stats-api";
import FullScreenLoader from "../components/fullscreen-loader";

import "./my-stats.css";

const MyStats = () => {
  const { isLoading, isError, error, data } = useGetMyStatsQuery();
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

  if (!user || isLoading) return <FullScreenLoader />;

  const enrolDate = getDateFromPydate(user.created_at);

  return (
    <div className="my-stats-container">
      <Helmet>
        <title>My-Stats - Eurasia Media Content</title>
        <meta property="og:title" content="My-Stats - Eurasia Media Content" />
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
          <NavbarCreator rootClassName="navbar-creator-root-class-name7"></NavbarCreator>
        ) : (
          <NavbarMarketeer></NavbarMarketeer>
        )}
      </div>
      <div className="my-stats-heading-title">
        <h1 className="my-stats-text">MY STATS</h1>
      </div>
      <div className="my-stats-my-stats1">
        <div className="my-stats-stat">
          <svg viewBox="0 0 1097.142857142857 1024" className="my-stats-icon">
            <path d="M731.429 530.286c0-10.286-8-18.286-18.286-18.286h-128v-201.143c0-9.714-8.571-18.286-18.286-18.286h-109.714c-9.714 0-18.286 8.571-18.286 18.286v201.143h-128c-10.286 0-18.286 8.571-18.286 18.286 0 4.571 1.714 9.714 5.143 13.143l201.143 201.143c3.429 3.429 8 5.143 13.143 5.143 4.571 0 9.714-1.714 13.143-5.143l200.571-200.571c3.429-4 5.714-8.571 5.714-13.714zM1097.143 658.286c0 121.143-98.286 219.429-219.429 219.429h-621.714c-141.143 0-256-114.857-256-256 0-99.429 57.714-189.714 147.429-231.429-0.571-8.571-1.143-16.571-1.143-24.571 0-161.714 130.857-292.571 292.571-292.571 118.857 0 225.714 72 270.857 181.714 26.286-22.857 60-35.429 94.857-35.429 80.571 0 146.286 65.714 146.286 146.286 0 28-8 55.429-23.429 78.857 99.429 23.429 169.714 112 169.714 213.714z"></path>
          </svg>
          <h1 className="my-stats-text01 StatsBig">{data.downloads}</h1>
          <span className="my-stats-text02 StatTitle">Videos Downloaded</span>
          <span className="my-stats-text03">
            All-time videos downloaded
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </div>
        <div className="my-stats-stat1">
          <svg viewBox="0 0 950.8571428571428 1024" className="my-stats-icon02">
            <path d="M73.143 950.857h164.571v-164.571h-164.571v164.571zM274.286 950.857h182.857v-164.571h-182.857v164.571zM73.143 749.714h164.571v-182.857h-164.571v182.857zM274.286 749.714h182.857v-182.857h-182.857v182.857zM73.143 530.286h164.571v-164.571h-164.571v164.571zM493.714 950.857h182.857v-164.571h-182.857v164.571zM274.286 530.286h182.857v-164.571h-182.857v164.571zM713.143 950.857h164.571v-164.571h-164.571v164.571zM493.714 749.714h182.857v-182.857h-182.857v182.857zM292.571 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM713.143 749.714h164.571v-182.857h-164.571v182.857zM493.714 530.286h182.857v-164.571h-182.857v164.571zM713.143 530.286h164.571v-164.571h-164.571v164.571zM731.429 256v-164.571c0-9.714-8.571-18.286-18.286-18.286h-36.571c-9.714 0-18.286 8.571-18.286 18.286v164.571c0 9.714 8.571 18.286 18.286 18.286h36.571c9.714 0 18.286-8.571 18.286-18.286zM950.857 219.429v731.429c0 40-33.143 73.143-73.143 73.143h-804.571c-40 0-73.143-33.143-73.143-73.143v-731.429c0-40 33.143-73.143 73.143-73.143h73.143v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h219.429v-54.857c0-50.286 41.143-91.429 91.429-91.429h36.571c50.286 0 91.429 41.143 91.429 91.429v54.857h73.143c40 0 73.143 33.143 73.143 73.143z"></path>
          </svg>
          <h1 className="my-stats-text04">{data.month_downloads}</h1>
          <span className="my-stats-text05 StatTitle">
            Downloads this Month
          </span>
          <span className="my-stats-text06">Videos downloaded this month</span>
        </div>
        <div className="my-stats-stat2">
          <svg viewBox="0 0 1024 1024" className="my-stats-icon04">
            <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
          </svg>
          <h1 className="my-stats-text07">{data.total_views}</h1>
          <span className="my-stats-text08 StatTitle">Total Views</span>
          <span className="my-stats-text09">Views of all videos combined</span>
        </div>
        <div className="my-stats-stat3">
          <svg viewBox="0 0 1024 1024" className="my-stats-icon06">
            <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
          </svg>
          <h1 className="my-stats-text10">{data.total_likes}</h1>
          <span className="my-stats-text11 StatTitle">Total Likes</span>
          <span className="my-stats-text12">Likes of all videos combined</span>
        </div>
      </div>
      <div className="my-stats-challenge-title">
        <span className="my-stats-text13">Support Bonus for New Students</span>
        <div className="my-stats-data">
          <span className="my-stats-text14">Bonus Status</span>
          <span className="my-stats-text15">Please complete the task </span>
        </div>
      </div>
      <div className="my-stats-my-stats2">
        <div className="my-stats-stat4">
          <svg viewBox="0 0 1024 1024" className="my-stats-icon08">
            <path d="M426 704l256-192-256-192v384zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <h1 className="my-stats-text16 StatsBig">
            <span>{data.first_posts}</span>
          </h1>
          <span className="my-stats-text18 StatTitle">Videos Posted</span>
          <span className="my-stats-text19">In the first 40 days</span>
        </div>
        <div className="my-stats-stat5">
          <svg viewBox="0 0 1024 1024" className="my-stats-icon10">
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM658.744 749.256l-210.744-210.746v-282.51h128v229.49l173.256 173.254-90.512 90.512z"></path>
          </svg>
          <h1 className="my-stats-text20 StatsBig">{data.days_left}</h1>
          <span className="my-stats-text21 StatTitle">Days Left</span>
          <span className="my-stats-text22">Hurry, offer expires soon</span>
        </div>
        <div className="my-stats-stat6">
          <div className="my-stats-container1">
            <svg viewBox="0 0 1024 1024" className="my-stats-icon12">
              <path d="M810 810v-468h-596v468h596zM682 42h86v86h42q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86zM726 512v214h-214v-214h214z"></path>
            </svg>
          </div>
          <h1 className="my-stats-text23 StatsBig">
            {enrolDate.getFullYear().toString(10).substr(-2)}/
            {enrolDate.getMonth() + 1 < 10
              ? "0" + (enrolDate.getMonth() + 1)
              : enrolDate.getMonth() + 1}
            /
            {enrolDate.getDate() < 10
              ? "0" + enrolDate.getDate()
              : enrolDate.getDate()}
          </h1>
          <span className="my-stats-text24 StatTitle">Date of Enrollment</span>
          <span className="my-stats-text25">Date you signed up</span>
        </div>
      </div>
      <div className="my-stats-rules">
        <span className="my-stats-rules1">
          If you didn&apos;t manage to recover the cost of the AI Marketeer
          Course during the first 40 days since you signed up for the course,
          Eurasia Media will give you a bonus of up to €200 to make sure you
          recover the cost of the course. VAT costs are not included in this
          Support Bonus. In order to be eligible to get the bonus, you must have
          posted 100 videos (from this platform) in your first 40 days.
        </span>
      </div>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  );
};

export default MyStats;
