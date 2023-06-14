import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarCreator from '../components/navbar-creator'
import Footer from '../components/footer'
import './dashboard.css'

const Dashboard = (props) => {
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
      <NavbarCreator rootClassName="navbar-creator-root-class-name3"></NavbarCreator>
      <div className="dashboard-heading-title">
        <h1 className="dashboard-text">DASHBOARD</h1>
      </div>
      <div className="dashboard-dashboard1">
        <div className="dashboard-stat">
          <div className="dashboard-container01">
            <svg
              viewBox="0 0 1022.8297142857142 1024"
              className="dashboard-icon"
            >
              <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text01 StatsBig">12,000</h1>
          <span className="dashboard-text02 StatTitle">Creators</span>
        </div>
        <div className="dashboard-stat1">
          <div className="dashboard-container02">
            <svg
              viewBox="0 0 1097.142857142857 1024"
              className="dashboard-icon02"
            >
              <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text03 StatsBig">13,000,000</h1>
          <span className="dashboard-text04 StatTitle">Marketeers</span>
        </div>
        <div className="dashboard-stat2">
          <div className="dashboard-container03">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon04">
              <path d="M598 854v-684h-428v684h428zM598 42q34 0 59 26t25 60v768q0 34-25 60t-59 26h-428q-34 0-59-26t-25-60v-768q0-34 25-60t59-26h428zM768 418q40 42 40 94t-40 90l-42-44q36-50 0-98zM858 328q80 76 80 183t-80 181l-44-44q58-62 58-141t-58-135z"></path>
            </svg>
            <div className="dashboard-container04"></div>
          </div>
          <h1 className="dashboard-text05 StatsBig">43,000,000</h1>
          <span className="dashboard-text06 StatTitle">Channels</span>
        </div>
        <div className="dashboard-stat3">
          <div className="dashboard-container05">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon06">
              <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text07 StatsBig">130,000,000</h1>
          <span className="dashboard-text08 StatTitle">Views</span>
        </div>
        <div className="dashboard-stat4">
          <div className="dashboard-container06">
            <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
              <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
            </svg>
          </div>
          <h1 className="dashboard-text09 StatsBig">13,000,000</h1>
          <span className="dashboard-text10 StatTitle">Likes</span>
        </div>
      </div>
      <div className="dashboard-dashboard2">
        <div className="dashboard-stat5">
          <h1 className="dashboard-text11 StatsBig">50,000,000</h1>
          <span className="dashboard-text12 StatTitle">Videos Uploaded</span>
        </div>
        <div className="dashboard-stat6">
          <h1 className="dashboard-text13">25,000,000</h1>
          <span className="dashboard-text14 StatTitle">Videos Downloaded</span>
        </div>
        <div className="dashboard-stat7">
          <h1 className="dashboard-text15">50%</h1>
          <span className="dashboard-text16 StatTitle">
            Upload-Download Ratio
          </span>
        </div>
        <div className="dashboard-stat8">
          <h1 className="dashboard-text17">1,300,000</h1>
          <span className="dashboard-text18 StatTitle">
            Videos Available Now
          </span>
        </div>
      </div>
      <div className="dashboard-challenge-title">
        <span className="dashboard-text19">PERFORMANCE TABLE</span>
      </div>
      <div className="dashboard-table-header">
        <div className="dashboard-container07">
          <span className="dashboard-text20">Month</span>
        </div>
        <div className="dashboard-container08">
          <span className="dashboard-text21">Videos Uploaded</span>
        </div>
        <div className="dashboard-container09">
          <span className="dashboard-text22">Videos Downloaded</span>
        </div>
        <div className="dashboard-container10">
          <span className="dashboard-text23">Upload-Download Ratio</span>
        </div>
        <div className="dashboard-container11">
          <span className="dashboard-text24">New Marketeers</span>
        </div>
      </div>
      <div className="dashboard-table-body">
        <div className="dashboard-table-row">
          <div className="dashboard-container12">
            <span className="dashboard-text25">Jul</span>
          </div>
          <div className="dashboard-container13">
            <span className="dashboard-text26">5,000,000</span>
          </div>
          <div className="dashboard-container14">
            <span className="dashboard-text27">4,000,000</span>
          </div>
          <div className="dashboard-container15">
            <span className="dashboard-text28">80%</span>
          </div>
          <div className="dashboard-container16">
            <span className="dashboard-text29">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row01">
          <div className="dashboard-container17">
            <span className="dashboard-text30">Aug</span>
          </div>
          <div className="dashboard-container18">
            <span className="dashboard-text31">5,000,000</span>
          </div>
          <div className="dashboard-container19">
            <span className="dashboard-text32">4,000,000</span>
          </div>
          <div className="dashboard-container20">
            <span className="dashboard-text33">80%</span>
          </div>
          <div className="dashboard-container21">
            <span className="dashboard-text34">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row02">
          <div className="dashboard-container22">
            <span className="dashboard-text35">Sep</span>
          </div>
          <div className="dashboard-container23">
            <span className="dashboard-text36">5,000,000</span>
          </div>
          <div className="dashboard-container24">
            <span className="dashboard-text37">4,000,000</span>
          </div>
          <div className="dashboard-container25">
            <span className="dashboard-text38">80%</span>
          </div>
          <div className="dashboard-container26">
            <span className="dashboard-text39">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row03">
          <div className="dashboard-container27">
            <span className="dashboard-text40">Oct</span>
          </div>
          <div className="dashboard-container28">
            <span className="dashboard-text41">5,000,000</span>
          </div>
          <div className="dashboard-container29">
            <span className="dashboard-text42">4,000,000</span>
          </div>
          <div className="dashboard-container30">
            <span className="dashboard-text43">80%</span>
          </div>
          <div className="dashboard-container31">
            <span className="dashboard-text44">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row04">
          <div className="dashboard-container32">
            <span className="dashboard-text45">Nov</span>
          </div>
          <div className="dashboard-container33">
            <span className="dashboard-text46">5,000,000</span>
          </div>
          <div className="dashboard-container34">
            <span className="dashboard-text47">4,000,000</span>
          </div>
          <div className="dashboard-container35">
            <span className="dashboard-text48">80%</span>
          </div>
          <div className="dashboard-container36">
            <span className="dashboard-text49">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row05">
          <div className="dashboard-container37">
            <span className="dashboard-text50">Dec</span>
          </div>
          <div className="dashboard-container38">
            <span className="dashboard-text51">5,000,000</span>
          </div>
          <div className="dashboard-container39">
            <span className="dashboard-text52">4,000,000</span>
          </div>
          <div className="dashboard-container40">
            <span className="dashboard-text53">80%</span>
          </div>
          <div className="dashboard-container41">
            <span className="dashboard-text54">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row06">
          <div className="dashboard-container42">
            <span className="dashboard-text55">Jan</span>
          </div>
          <div className="dashboard-container43">
            <span className="dashboard-text56">5,000,000</span>
          </div>
          <div className="dashboard-container44">
            <span className="dashboard-text57">4,000,000</span>
          </div>
          <div className="dashboard-container45">
            <span className="dashboard-text58">80%</span>
          </div>
          <div className="dashboard-container46">
            <span className="dashboard-text59">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row07">
          <div className="dashboard-container47">
            <span className="dashboard-text60">Feb</span>
          </div>
          <div className="dashboard-container48">
            <span className="dashboard-text61">5,000,000</span>
          </div>
          <div className="dashboard-container49">
            <span className="dashboard-text62">4,000,000</span>
          </div>
          <div className="dashboard-container50">
            <span className="dashboard-text63">80%</span>
          </div>
          <div className="dashboard-container51">
            <span className="dashboard-text64">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row08">
          <div className="dashboard-container52">
            <span className="dashboard-text65">Mar</span>
          </div>
          <div className="dashboard-container53">
            <span className="dashboard-text66">5,000,000</span>
          </div>
          <div className="dashboard-container54">
            <span className="dashboard-text67">4,000,000</span>
          </div>
          <div className="dashboard-container55">
            <span className="dashboard-text68">80%</span>
          </div>
          <div className="dashboard-container56">
            <span className="dashboard-text69">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row09">
          <div className="dashboard-container57">
            <span className="dashboard-text70">Apr</span>
          </div>
          <div className="dashboard-container58">
            <span className="dashboard-text71">5,000,000</span>
          </div>
          <div className="dashboard-container59">
            <span className="dashboard-text72">4,000,000</span>
          </div>
          <div className="dashboard-container60">
            <span className="dashboard-text73">80%</span>
          </div>
          <div className="dashboard-container61">
            <span className="dashboard-text74">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row10">
          <div className="dashboard-container62">
            <span className="dashboard-text75">May</span>
          </div>
          <div className="dashboard-container63">
            <span className="dashboard-text76">5,000,000</span>
          </div>
          <div className="dashboard-container64">
            <span className="dashboard-text77">4,000,000</span>
          </div>
          <div className="dashboard-container65">
            <span className="dashboard-text78">80%</span>
          </div>
          <div className="dashboard-container66">
            <span className="dashboard-text79">10,000</span>
          </div>
        </div>
        <div className="dashboard-table-row11">
          <div className="dashboard-container67">
            <span className="dashboard-text80">Jun</span>
          </div>
          <div className="dashboard-container68">
            <span className="dashboard-text81">5,000,000</span>
          </div>
          <div className="dashboard-container69">
            <span className="dashboard-text82">4,000,000</span>
          </div>
          <div className="dashboard-container70">
            <span className="dashboard-text83">80%</span>
          </div>
          <div className="dashboard-container71">
            <span className="dashboard-text84">10,000</span>
          </div>
        </div>
      </div>
      <div className="dashboard-container72"></div>
      <Footer></Footer>
    </div>
  )
}

export default Dashboard
