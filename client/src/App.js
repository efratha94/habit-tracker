import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SignIn from "./components/authentication/SignIn"
import Register from "./components/authentication/Register"
import Dashboard from "./components/dashboard/Dashboard"
import './App.css';

const App = () => {

  return (
    <Router>
      <div id="container">
        <div id="main-links">
            
        </div>

        <Route path="/signin" exact render={({match}) => <SignIn match={match} />} />
        <Route path="/register" exact render={({match}) => <Register match={match} />} />
        <Route path="/dashboard/:user" exact render={({match}) => <Dashboard match={match} />} />
      </div>
    </Router>
  )
}

export default App;
