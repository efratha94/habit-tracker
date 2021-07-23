import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import SignIn from "./components/authentication/SignIn"
import Register from "./components/authentication/Register"
import Dashboard from "./components/dashboard/Dashboard"
import { UserContext } from "./utils/UserContext"
import { ProtectedRoute } from "./utils/ProtectedRoute"
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
