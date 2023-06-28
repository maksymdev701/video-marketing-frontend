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
import NewUserPopUp from "./views/new-user-pop-up";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<UnauthorizedPage />} path="/unauthorized" />

          <Route
            element={<RequireUser allowedRoles={["marketeer", "creator"]} />}
          >
            <Route element={<MyStats />} path="/my-stats" />
            <Route element={<Download />} path="/download" />
          </Route>

          <Route
            element={
              <RequireUser allowedRoles={["marketeer", "creator", "admin"]} />
            }
          >
            <Route element={<Account />} path="/account" />
          </Route>

          <Route element={<RequireUser allowedRoles={["admin"]} />}>
            <Route element={<Users />} path="/users" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Jackpot />} path="/jackpot" />
          </Route>

          <Route element={<RequireUser allowedRoles={["creator"]} />}>
            <Route element={<Creator />} path="/creator" />
          </Route>

          <Route element={<TermsPrivacy />} path="/terms-privacy" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
