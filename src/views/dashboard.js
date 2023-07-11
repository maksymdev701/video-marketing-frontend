import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import "./dashboard.css";

import NavbarAdmin from "../components/navbar-admin";
import Footer from "../components/footer";
import FullScreenLoader from "../components/fullscreen-loader";
import { useGetAdminStatsQuery } from "../redux/api/stats-api";

const Dashboard = () => {
  const { isLoading, isError, error, data } = useGetAdminStatsQuery();

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
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Eurasia Media Content</title>
        <meta property="og:title" content="Dashboard - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="dashboard-sticky-admin-nav-bar">
        <NavbarAdmin rootClassName="navbar-admin-root-class-name"></NavbarAdmin>
      </div>
      <div className="dashboard-heading-title">
        <h1 className="dashboard-text">DASHBOARD</h1>
      </div>
      <div className="dashboard-red-dashboard">
        <div className="dashboard-stat">
          <div className="dashboard-container01">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon">
              <path d="M480 64c-265.096 0-480 214.904-480 480s214.904 480 480 480c265.098 0 480-214.902 480-480s-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.076 0 384 171.922 384 384s-171.924 384-384 384z"></path>
              <path d="M670.824 644.34c-15.27-8.884-34.862-3.708-43.75 11.57-17.256 29.662-49.088 48.090-83.074 48.090h-128c-41.716 0-77.286-26.754-90.496-64h154.496c17.672 0 32-14.326 32-32s-14.328-32-32-32h-160v-64h160c17.672 0 32-14.328 32-32s-14.328-32-32-32h-154.496c13.21-37.246 48.78-64 90.496-64h128c33.986 0 65.818 18.426 83.074 48.090 8.888 15.276 28.478 20.456 43.752 11.568 15.276-8.888 20.456-28.476 11.568-43.752-28.672-49.288-81.702-79.906-138.394-79.906h-128c-77.268 0-141.914 55.056-156.78 128h-35.22c-17.672 0-32 14.328-32 32s14.328 32 32 32h32v64h-32c-17.672 0-32 14.326-32 32s14.328 32 32 32h35.22c14.866 72.944 79.512 128 156.78 128h128c56.692 0 109.72-30.62 138.394-79.91 8.888-15.276 3.708-34.864-11.57-43.75z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text01 StatsBig">
            €{data.revenue.toLocaleString()}
          </h1>
          <span className="dashboard-text02 StatTitle">Revenue</span>
        </div>
        <div className="dashboard-stat01">
          <div className="dashboard-container02">
            <svg
              viewBox="0 0 1022.8297142857142 1024"
              className="dashboard-icon03"
            >
              <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text03 StatsBig">
            {data.creators.toLocaleString()}
          </h1>
          <span className="dashboard-text04 StatTitle">Creators</span>
        </div>
        <div className="dashboard-stat02">
          <div className="dashboard-container03">
            <svg
              viewBox="0 0 1097.142857142857 1024"
              className="dashboard-icon05"
            >
              <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text05 StatsBig">
            {data.marketeers.toLocaleString()}
          </h1>
          <span className="dashboard-text06 StatTitle">Marketeers</span>
        </div>
        <div className="dashboard-stat03">
          <div className="dashboard-container04">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon07">
              <path d="M598 854v-684h-428v684h428zM598 42q34 0 59 26t25 60v768q0 34-25 60t-59 26h-428q-34 0-59-26t-25-60v-768q0-34 25-60t59-26h428zM768 418q40 42 40 94t-40 90l-42-44q36-50 0-98zM858 328q80 76 80 183t-80 181l-44-44q58-62 58-141t-58-135z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text07 StatsBig">
            {data.channels.toLocaleString()}
          </h1>
          <span className="dashboard-text08 StatTitle">Channels</span>
        </div>
        <div className="dashboard-stat04">
          <div className="dashboard-container05">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon09">
              <path d="M234 298q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM914 494q24 24 24 60t-24 60l-300 300q-24 24-60 24t-60-24l-384-384q-24-24-24-60v-300q0-34 25-59t59-25h300q36 0 60 24z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text09 StatsBig">
            {data.brands.toLocaleString()}
          </h1>
          <span className="dashboard-text10 StatTitle">Brands</span>
        </div>
        <div className="dashboard-stat05">
          <div className="dashboard-container06">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon11">
              <path d="M1024 201.143v621.714c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-230.286-230.286v94.857c0 90.857-73.714 164.571-164.571 164.571h-402.286c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h402.286c90.857 0 164.571 73.714 164.571 164.571v94.286l230.286-229.714c6.857-7.429 16-10.857 25.714-10.857 4.571 0 9.714 1.143 14.286 2.857 13.143 5.714 22.286 18.857 22.286 33.714z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text11 StatsBig">
            {data.videos.toLocaleString()}
          </h1>
          <span className="dashboard-text12 StatTitle">Videos</span>
        </div>
        <div className="dashboard-stat06">
          <div className="dashboard-container07">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon13">
              <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text13 StatsBig">
            {data.views.toLocaleString()}
          </h1>
          <span className="dashboard-text14 StatTitle">Views</span>
        </div>
        <div className="dashboard-stat07">
          <div className="dashboard-container08">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon15">
              <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text15 StatsBig">
            {data.likes.toLocaleString()}
          </h1>
          <span className="dashboard-text16 StatTitle">Likes</span>
        </div>
      </div>
      <div className="dashboard-month-stats">
        <span className="dashboard-text17">
          CURRENT MONTH&apos;S PERFORMANCE
        </span>
        <div className="dashboard-dashboard2">
          <div className="dashboard-stat08">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon17">
              <path d="M480 64c-265.096 0-480 214.904-480 480s214.904 480 480 480c265.098 0 480-214.902 480-480s-214.902-480-480-480zM480 928c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.076 0 384 171.922 384 384s-171.924 384-384 384z"></path>
              <path d="M670.824 644.34c-15.27-8.884-34.862-3.708-43.75 11.57-17.256 29.662-49.088 48.090-83.074 48.090h-128c-41.716 0-77.286-26.754-90.496-64h154.496c17.672 0 32-14.326 32-32s-14.328-32-32-32h-160v-64h160c17.672 0 32-14.328 32-32s-14.328-32-32-32h-154.496c13.21-37.246 48.78-64 90.496-64h128c33.986 0 65.818 18.426 83.074 48.090 8.888 15.276 28.478 20.456 43.752 11.568 15.276-8.888 20.456-28.476 11.568-43.752-28.672-49.288-81.702-79.906-138.394-79.906h-128c-77.268 0-141.914 55.056-156.78 128h-35.22c-17.672 0-32 14.328-32 32s14.328 32 32 32h32v64h-32c-17.672 0-32 14.326-32 32s14.328 32 32 32h35.22c14.866 72.944 79.512 128 156.78 128h128c56.692 0 109.72-30.62 138.394-79.91 8.888-15.276 3.708-34.864-11.57-43.75z"></path>
            </svg>
            <h1 className="dashboard-text18">
              €{data.this_month_revenue.toLocaleString()}
            </h1>
            <span className="dashboard-text19 StatTitle">Revenue</span>
          </div>
          <div className="dashboard-stat09">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon20">
              <path d="M598 554h128l-214-212-214 212h128v172h172v-172zM826 428q82 6 140 67t58 145q0 88-63 151t-151 63h-554q-106 0-181-75t-75-181q0-94 67-169t161-85q42-78 118-126t166-48q108 0 201 76t113 182z"></path>
            </svg>
            <h1 className="dashboard-text20 StatsBig">
              {data.this_month_uploads.toLocaleString()}
            </h1>
            <span className="dashboard-text21 StatTitle">Videos Uploaded</span>
          </div>
          <div className="dashboard-stat10">
            <svg
              viewBox="0 0 1097.142857142857 1024"
              className="dashboard-icon22"
            >
              <path d="M731.429 530.286c0-10.286-8-18.286-18.286-18.286h-128v-201.143c0-9.714-8.571-18.286-18.286-18.286h-109.714c-9.714 0-18.286 8.571-18.286 18.286v201.143h-128c-10.286 0-18.286 8.571-18.286 18.286 0 4.571 1.714 9.714 5.143 13.143l201.143 201.143c3.429 3.429 8 5.143 13.143 5.143 4.571 0 9.714-1.714 13.143-5.143l200.571-200.571c3.429-4 5.714-8.571 5.714-13.714zM1097.143 658.286c0 121.143-98.286 219.429-219.429 219.429h-621.714c-141.143 0-256-114.857-256-256 0-99.429 57.714-189.714 147.429-231.429-0.571-8.571-1.143-16.571-1.143-24.571 0-161.714 130.857-292.571 292.571-292.571 118.857 0 225.714 72 270.857 181.714 26.286-22.857 60-35.429 94.857-35.429 80.571 0 146.286 65.714 146.286 146.286 0 28-8 55.429-23.429 78.857 99.429 23.429 169.714 112 169.714 213.714z"></path>
            </svg>
            <h1 className="dashboard-text22">
              {data.this_month_downloads.toLocaleString()}
            </h1>
            <span className="dashboard-text23 StatTitle">
              Videos Downloaded
            </span>
          </div>
          <div className="dashboard-stat11">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon24">
              <path d="M1024 201.143v621.714c0 14.857-9.143 28-22.286 33.714-4.571 1.714-9.714 2.857-14.286 2.857-9.714 0-18.857-3.429-25.714-10.857l-230.286-230.286v94.857c0 90.857-73.714 164.571-164.571 164.571h-402.286c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h402.286c90.857 0 164.571 73.714 164.571 164.571v94.286l230.286-229.714c6.857-7.429 16-10.857 25.714-10.857 4.571 0 9.714 1.143 14.286 2.857 13.143 5.714 22.286 18.857 22.286 33.714z"></path>
            </svg>
            <h1 className="dashboard-text24">
              {(
                data.this_month_uploads - data.this_month_downloads
              ).toLocaleString()}
            </h1>
            <span className="dashboard-text25 StatTitle">
              Videos Available Now
            </span>
          </div>
        </div>
      </div>
      <div className="dashboard-challenge-title">
        <span className="dashboard-text26">PERFORMANCE TABLE</span>
      </div>
      <div className="dashboard-table-header">
        <div className="dashboard-container09">
          <span className="dashboard-text27">Month</span>
        </div>
        <div className="dashboard-container10">
          <span className="dashboard-text28">Videos Uploaded</span>
        </div>
        <div className="dashboard-container11">
          <span className="dashboard-text29">Videos Downloaded</span>
        </div>
        <div className="dashboard-container12">
          <span className="dashboard-text30">Upload-Download Ratio</span>
        </div>
        <div className="dashboard-container13">
          <span className="dashboard-text31">New Marketeers</span>
        </div>
      </div>
      <div className="dashboard-table-body">
        {data.performance.map((row, index) => (
          <div className="dashboard-table-row" key={index}>
            <div className="dashboard-container14">
              <span className="dashboard-text32">{row.month_abbr}</span>
            </div>
            <div className="dashboard-container15">
              <span className="dashboard-text33">
                {row.uploads.toLocaleString()}
              </span>
            </div>
            <div className="dashboard-container16">
              <span className="dashboard-text34">
                {row.downloads.toLocaleString()}
              </span>
            </div>
            <div className="dashboard-container17">
              <span className="dashboard-text35">
                {row.uploads == 0
                  ? 0
                  : parseInt((row.downloads / row.uploads) * 100)}
                %
              </span>
            </div>
            <div className="dashboard-container18">
              <span className="dashboard-text36">
                {row.marketeers.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer rootClassName="footer-root-class-name8"></Footer>
    </div>
  );
};

export default Dashboard;
