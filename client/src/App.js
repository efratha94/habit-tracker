import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from "./components/Authentication/SignIn"
import Register from "./components/Authentication/Register"
import Dashboard from "./components/Dashboard/Dashboard"
import { UserContext } from "./Utils/UserContext"
import { ProtectedRoute } from "./Utils/ProtectedRoute"
import './App.css';

const App = () => {
  const [login, setLogin] = useState(false)
  const providerLogin = useMemo(() => ({login, setLogin}), [login, setLogin])

  return (
    <Router>
      <div id="container">
        <div id="main-links">
            
        </div>

        <UserContext.Provider value={providerLogin}>
          <Switch>
            {/* landing page */}
            <Route path="/signin" exact component={SignIn} />
            <Route path="/register" exact component={Register} />
            <ProtectedRoute path="/dashboard/:user" exact component={Dashboard} />
            <Route path="*" component={() => "404 Not found"} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default App;
