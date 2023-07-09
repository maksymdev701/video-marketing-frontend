import React from "react";

import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import "./terms-privacy.css";

import NavbarMarketeer from "../components/navbar-marketeer";
import NavbarCreator from "../components/navbar-creator";
import Footer from "../components/footer";
import FullScreenLoader from "../components/fullscreen-loader";

const TermsPrivacy = () => {
  const user = useSelector((state) => state.userState.user);
  if (!user) return <FullScreenLoader />;

  return (
    <div className="terms-privacy-container">
      <Helmet>
        <title>Terms-Privacy - Eurasia Media Content</title>
        <meta
          property="og:title"
          content="Terms-Privacy - Eurasia Media Content"
        />
        <meta
          property="og:description"
          content="Content platform for Eurasia Media Creators and Marketeers. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/071bde54-b947-4b89-82c7-e6a339ef6380/186d5565-2c99-44f3-984e-7613e4faed3d?org_if_sml=1"
        />
      </Helmet>
      <div className="terms-privacy-sticky-nav-bar">
        {user.role === "marketeer" ? (
          <NavbarMarketeer />
        ) : (
          <NavbarCreator rootClassName="navbar-creator-root-class-name3" />
        )}
      </div>
      <div className="terms-privacy-heading-title">
        <h1 className="terms-privacy-text">TERMS AND PRIVACY</h1>
        <span>
          Please read carefully the Terms of Service and Privacy Policy (below)
        </span>
      </div>
      <div className="terms-privacy-container1">
        <div className="terms-privacy-terms">
          <span className="terms-privacy-text2">Terms of Service</span>
          <span className="terms-privacy-text3">
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </span>
        </div>
        <div className="terms-privacy-terms1">
          <span className="terms-privacy-text4">Privacy Policy</span>
          <span className="terms-privacy-text5">
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </span>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name5"></Footer>
    </div>
  );
};

export default TermsPrivacy;
