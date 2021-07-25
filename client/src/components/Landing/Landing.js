import React from 'react'
import { Link } from 'react-router-dom'
import "./Landing.css"

const Landing = () => {

    return (
        <div className="landing-page">
            <h1>
                Welcome to Habit Tracker
            </h1>
            <h2>
                Ready to track your habits?
            </h2>
            <div className="landing-link">
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                    <span>Sign In</span>
                </Link>
            </div>
            <div className="landing-link">
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <span>Not a member yet? Join us!</span>
                </Link>
            </div>
        </div>
    )
}

export default Landing