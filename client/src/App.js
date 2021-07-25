import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import SignIn from "./components/Authentication/SignIn"
import Register from "./components/Authentication/Register"
import Dashboard from "./components/Dashboard/Dashboard"
import { UserContext } from "./utils/UserContext"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import './App.css';

const App = () => {
  const [login, setLogin] = useState(false)
  const [activeUser, setActiveUser] = useState('')
  const providerLogin = useMemo(() => ({login, setLogin, activeUser, setActiveUser}), [login, setLogin, activeUser, setActiveUser])

  return (
    <Router>
      <div id="container">
        <UserContext.Provider value={providerLogin}>
          <Switch>
            <Route path="/" exact component={Landing} />
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
