import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";

import MyStats from "./views/my-stats";
import Creator from "./views/creator";
import Users from "./views/users";
import Account from "./views/account";
import Download from "./views/download";
import Home from "./views/home";
import TermsPrivacy from "./views/terms-privacy";
import Dashboard from "./views/dashboard";
import UnauthorizedPage from "./views/unauthorized";
import RequireUser from "./components/require-user";
import Contact from "./views/contact";
import Jackpot from "./views/jackpot";
import { store } from "./redux/store";
import Verify from "./views/verify";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={1000} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Verify />} path="/verify" />
          <Route element={<UnauthorizedPage />} path="/unauthorized" />

          <Route
            element={<RequireUser allowedRoles={["marketeer", "creator"]} />}
          >
            <Route element={<MyStats />} path="/my-stats" />
          </Route>

          <Route
            element={
              <RequireUser allowedRoles={["marketeer", "creator", "admin"]} />
            }
          >
            <Route element={<Account />} path="/account" />
            <Route element={<Download />} path="/download" />
          </Route>

          <Route element={<RequireUser allowedRoles={["admin"]} />}>
            <Route element={<Users />} path="/users" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Jackpot />} path="/jackpot" />
          </Route>

          <Route element={<RequireUser allowedRoles={["creator"]} />}>
            <Route element={<Creator />} path="/creator" />
            <Route element={<Contact />} path="/contact" />
          </Route>

          <Route element={<TermsPrivacy />} path="/terms-privacy" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
