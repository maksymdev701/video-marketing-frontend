import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./style.css";
import 'react-toastify/dist/ReactToastify.css';

import MyStats from "./views/my-stats";
import NewUser from "./views/new-user";
import UploadPopup from "./views/upload-popup";
import Creator from "./views/creator";
import Users from "./views/users";
import ForgotPassword from "./views/forgot-password";
import Account from "./views/account";
import Download from "./views/download";
import Home from "./views/home";
import TermsPrivacy from "./views/terms-privacy";
import Dashboard from "./views/dashboard";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MyStats />} path="/my-stats" />
          <Route element={<NewUser />} path="/new-user" />
          <Route element={<UploadPopup />} path="/upload-popup" />
          <Route element={<Creator />} path="/creator" />
          <Route element={<Users />} path="/users" />
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<Account />} path="/account" />
          <Route element={<Download />} path="/download" />
          <Route element={<TermsPrivacy />} path="/terms-privacy" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
