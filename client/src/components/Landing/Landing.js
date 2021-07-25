import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <div className="landing-page">
            <h1 className="landing-header">Welcome</h1>
            <div className="landing-link">
                <Link to="/signin">Sign In</Link>
            </div>
            <div className="landing-link">
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Landing