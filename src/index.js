import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";

import MyStats from "./views/my-stats";
import NewUser from "./views/new-user";
import Creator from "./views/creator";
import Users from "./views/users";
import ForgotPassword from "./views/forgot-password";
import Account from "./views/account";
import Download from "./views/download";
import Home from "./views/home";
import TermsPrivacy from "./views/terms-privacy";
import Dashboard from "./views/dashboard";
import UnauthorizedPage from "./views/unauthorized";
import RequireUser from "./components/require-user";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ForgotPassword />} path="/forgot-password" />
          <Route element={<UnauthorizedPage />} path="/unauthorized" />

          <Route
            element={<RequireUser allowedRoles={["marketeer", "creator"]} />}
          >
            <Route element={<MyStats />} path="/my-stats" />
            <Route element={<Account />} path="/account" />
            <Route element={<Download />} path="/download" />
          </Route>

          <Route element={<RequireUser allowedRoles={["admin"]} />}>
            <Route element={<NewUser />} path="/new-user" />
            <Route element={<Users />} path="/users" />
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>

          <Route element={<RequireUser allowedRoles={["creator"]} />}>
            <Route element={<Creator />} path="/creator" />
          </Route>

          <Route element={<TermsPrivacy />} path="/terms-privacy" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
