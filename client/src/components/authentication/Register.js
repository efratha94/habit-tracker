import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../utils/UserContext"
import "./Authentication.css"
import axios from "axios"

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let history = useHistory();
    const { setLogin, setActiveUser } = useContext(UserContext);

    const handleSubmit = async e => {

        try {

            e.preventDefault();
            await axios.post("http://localhost:3001/registerUser", { username, password })
            setLogin(true)
            setActiveUser(username)
            history.push(`/dashboard/${username}`)

        } catch (err) {

            setError(err.response.data)
            setUsername('')
            setPassword('')

        }
    }


    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <div className="auth-field__controls">
                    <div className="auth-field">
                        <label>Username:</label>
                        <input
                            value={username || ''}
                            name="username"
                            required
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className="auth-field">

                        <label>Password:</label>
                        <input
                            value={password || ''}
                            name="password"
                            required
                            onChange={e => setPassword(e.target.value)}
                            type="text"
                        />
                    </div>

                    <button className="submit-auth"> Register! </button>
                </div>
            </form>
            {error ? <div>{error}</div> : null} {/* should be refined */}
        </div>
    )
}

export default Register