import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MyStats from './views/my-stats'
import NewUser from './views/new-user'
import UploadPopup from './views/upload-popup'
import Creator from './views/creator'
import Users from './views/users'
import ForgotPassword from './views/forgot-password'
import Account from './views/account'
import Download from './views/download'
import Home from './views/home'
import TermsPrivacy from './views/terms-privacy'
import Dashboard from './views/dashboard'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MyStats} exact path="/my-stats" />
        <Route component={NewUser} exact path="/new-user" />
        <Route component={UploadPopup} exact path="/upload-popup" />
        <Route component={Creator} exact path="/creator" />
        <Route component={Users} exact path="/users" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Account} exact path="/account" />
        <Route component={Download} exact path="/download" />
        <Route component={Home} exact path="/" />
        <Route component={TermsPrivacy} exact path="/terms-privacy" />
        <Route component={Dashboard} exact path="/dashboard" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
