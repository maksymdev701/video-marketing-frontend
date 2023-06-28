import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import "./users.css";

import NavbarAdmin from "../components/navbar-admin";
import Footer from "../components/footer";
import FullScreenLoader from "../components/fullscreen-loader";
import NewUserPopUp from "../views/new-user-pop-up";
import { useGetUsersQuery } from "../redux/api/user-api";
import { getDateFromPydate } from "../utils";

const Users = () => {
  const { isLoading, isError, error, data } = useGetUsersQuery();
  const [showPopup, setShowPopup] = useState(false);

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
    <div className="users-container">
      <Helmet>
        <title>Users - Eurasia Media Content</title>
        <meta property="og:title" content="Users - Eurasia Media Content" />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="users-sticky-admin-nav-bar">
        <NavbarAdmin rootClassName="navbar-admin-root-class-name2"></NavbarAdmin>
      </div>
      <div className="users-container1">
        <h1 className="users-text">Users</h1>
        <div className="users-container2">
          <span className="users-text01">
            <span className="users-text02">
              BONUS STATUS: 
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span> </span>
            <br></br>
            <span>
              C -&gt; Congrats, you didn’t need support!
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>
              P -&gt; Bonus paid
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>
              W -&gt; Working on the task
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>
              F -&gt; Failed to deliver
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>
              N -&gt; Not applicable
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
          </span>
          <span className="users-text15">
            <span className="users-text16">
              TYPE: 
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span> </span>
            <br></br>
            <span>C -&gt; Creator</span>
            <br></br>
            <span>M -&gt; Marketeer</span>
            <br></br>
            <span>A -&gt; Admin</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
          </span>
          <button
            className="users-navlink button"
            onClick={() => setShowPopup(true)}
          >
            ADD NEW USER
          </button>
        </div>
      </div>
      <div className="users-table-header">
        <div className="users-user-id">
          <span className="users-text26">User ID</span>
        </div>
        <div className="users-type">
          <span className="users-text27">Type</span>
        </div>
        <div className="users-uploads">
          <span className="users-text28">Uploads</span>
        </div>
        <div className="users-downloads">
          <span className="users-text29">Downloads</span>
        </div>
        <div className="users-views">
          <span className="users-text30">Views</span>
        </div>
        <div className="users-likes">
          <span className="users-text31">Likes</span>
        </div>
        <div className="users-tt">
          <img alt="image" src="/tiktok-wh-200h.png" className="users-image" />
        </div>
        <div className="users-yt">
          <svg viewBox="0 0 877.7142857142857 1024" className="users-icon">
            <path d="M525.143 744.571v-89.714c0-18.857-5.714-28.571-16.571-28.571-6.286 0-12.571 2.857-18.857 9.143v128c6.286 6.286 12.571 9.143 18.857 9.143 10.857 0 16.571-9.143 16.571-28zM630.286 674.857h37.714v-19.429c0-19.429-6.286-29.143-18.857-29.143s-18.857 9.714-18.857 29.143v19.429zM304 522.857v40h-45.714v241.714h-42.286v-241.714h-44.571v-40h132.571zM418.857 594.857v209.714h-38.286v-22.857c-14.857 17.143-29.143 25.714-43.429 25.714-12 0-20.571-5.143-24-16-2.286-6.286-3.429-16-3.429-30.857v-165.714h37.714v154.286c0 8.571 0 13.714 0.571 14.857 0.571 5.714 3.429 8.571 8.571 8.571 8 0 15.429-5.714 24-17.714v-160h38.286zM562.857 658.286v83.429c0 18.857-1.143 33.143-4 41.714-4.571 16-14.857 24-30.286 24-13.143 0-26.286-8-38.857-23.429v20.571h-38.286v-281.714h38.286v92c12-14.857 25.143-22.857 38.857-22.857 15.429 0 25.714 8 30.286 24 2.857 8.571 4 22.286 4 42.286zM706.286 732v5.143c0 12.571-0.571 20.571-1.143 24.571-1.143 8.571-4 16-8.571 22.857-10.286 15.429-26.286 22.857-45.714 22.857-20 0-35.429-7.429-46.286-21.714-8-10.286-12-26.857-12-49.143v-73.714c0-22.286 3.429-38.286 11.429-49.143 10.857-14.286 26.286-21.714 45.714-21.714 18.857 0 34.286 7.429 44.571 21.714 8 10.857 12 26.857 12 49.143v43.429h-76v37.143c0 19.429 6.286 29.143 19.429 29.143 9.143 0 14.857-5.143 17.143-14.857 0-2.286 0.571-10.857 0.571-25.714h38.857zM448.571 261.143v89.143c0 19.429-6.286 29.143-18.286 29.143-12.571 0-18.286-9.714-18.286-29.143v-89.143c0-19.429 5.714-29.714 18.286-29.714 12 0 18.286 10.286 18.286 29.714zM753.143 668.571v0c0-49.143 0-101.143-10.857-148.571-8-33.714-35.429-58.286-68-61.714-77.714-8.571-156.571-8.571-235.429-8.571-78.286 0-157.143 0-234.857 8.571-33.143 3.429-60.571 28-68 61.714-10.857 47.429-11.429 99.429-11.429 148.571v0c0 48.571 0 100.571 11.429 148.571 7.429 33.143 34.857 57.714 67.429 61.714 78.286 8.571 157.143 8.571 235.429 8.571s157.143 0 235.429-8.571c32.571-4 60-28.571 67.429-61.714 11.429-48 11.429-100 11.429-148.571zM321.714 296.571l51.429-169.143h-42.857l-29.143 111.429-30.286-111.429h-44.571c8.571 26.286 18.286 52.571 26.857 78.857 13.714 40 22.286 69.714 26.286 90.286v114.857h42.286v-114.857zM486.857 342.857v-74.286c0-22.286-4-38.857-12-49.714-10.857-14.286-25.714-21.714-44.571-21.714-19.429 0-34.286 7.429-44.571 21.714-8 10.857-12 27.429-12 49.714v74.286c0 22.286 4 38.857 12 49.714 10.286 14.286 25.143 21.714 44.571 21.714 18.857 0 33.714-7.429 44.571-21.714 8-10.286 12-27.429 12-49.714zM590.286 411.429h38.286v-211.429h-38.286v161.714c-8.571 12-16.571 17.714-24 17.714-5.143 0-8.571-2.857-9.143-9.143-0.571-1.143-0.571-5.714-0.571-14.857v-155.429h-38.286v167.429c0 14.857 1.143 24.571 3.429 31.429 4 10.286 12.571 15.429 24.571 15.429 14.286 0 28.571-8.571 44-25.714v22.857zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </div>
        <div className="users-fb">
          <svg viewBox="0 0 877.7142857142857 1024" className="users-icon2">
            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
          </svg>
        </div>
        <div className="users-tt01">
          <svg viewBox="0 0 877.7142857142857 1024" className="users-icon4">
            <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
          </svg>
        </div>
        <div className="users-tt02">
          <svg viewBox="0 0 950.8571428571428 1024" className="users-icon6">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </div>
        <div className="users-likes01">
          <span className="users-text32">Joined</span>
        </div>
        <div className="users-vids-40-days">
          <span className="users-text33">Videos 40 Days</span>
        </div>
        <div className="users-status">
          <span className="users-text34">Bonus</span>
        </div>
      </div>
      <div className="users-table-body">
        {data.map((user, index) => (
          <div className="users-table-row" key={index}>
            <div className="users-user-id1">
              <span className="users-text35">{user.name}</span>
            </div>
            <div className="users-type1">
              <span className="users-text36">
                {user.role === "admin"
                  ? "A"
                  : user.role === "creator"
                  ? "C"
                  : "M"}
              </span>
            </div>
            <div className="users-uploads1">
              <span className="users-text37">{user.upload_count}</span>
            </div>
            <div className="users-downloads1">
              <span className="users-text38">{user.download_count}</span>
            </div>
            <div className="users-views1">
              <span className="users-text39">{user.views}</span>
            </div>
            <div className="users-likes02">
              <span className="users-text40">{user.likes}</span>
            </div>
            <div className="users-tt03">
              <span className="users-text41">
                {user.tiktok.length === 0 ? "N" : "Y"}
              </span>
            </div>
            <div className="users-yt1">
              <span className="users-text42">
                {user.youtube.length === 0 ? "N" : "Y"}
              </span>
            </div>
            <div className="users-fb1">
              <span className="users-text43">
                {user.facebook.length === 0 ? "N" : "Y"}
              </span>
            </div>
            <div className="users-tt04">
              <span className="users-text44">
                {user.instagram.length === 0 ? "N" : "Y"}
              </span>
            </div>
            <div className="users-tt05">
              <span className="users-text45">
                {user.twitter.length === 0 ? "N" : "Y"}
              </span>
            </div>
            <div className="users-likes03">
              <span className="users-text46">
                {getDateFromPydate(user.created_at)
                  .getFullYear()
                  .toString(10)
                  .substr(-2)}
                /
                {getDateFromPydate(user.created_at).getMonth() + 1 < 10
                  ? "0" + (getDateFromPydate(user.created_at).getMonth() + 1)
                  : getDateFromPydate(user.created_at).getMonth() + 1}
                /
                {getDateFromPydate(user.created_at).getDate() < 10
                  ? "0" + getDateFromPydate(user.created_at).getDate()
                  : getDateFromPydate(user.created_at).getDate()}
              </span>
            </div>
            <div className="users-vids-40-days1">
              <span className="users-text47">
                {user.first_40d_download_count}
              </span>
            </div>
            <div className="users-status1">
              <span className="users-text48">W</span>
            </div>
          </div>
        ))}
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
      <NewUserPopUp isShown={showPopup} showFunc={setShowPopup} />
    </div>
  );
};

export default Users;
