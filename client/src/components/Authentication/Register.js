import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../../utils/UserContext"
import DialogComp from "../../utils/DialogComp"
import "./Authentication.css"
import axios from "axios"

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('')
    let history = useHistory();
    const { setLogin, setActiveUser } = useContext(UserContext);

    const handleSubmit = async e => {

        try {
            e.preventDefault();
            const envURL = process.env.NODE_ENV === "development" ? "http://localhost:3001/registerUser" : "/registerUser"
            await axios.post(envURL, { username, password })
            setLogin(true)
            setActiveUser(username)
            history.push(`/dashboard/${username}`)

        } catch (err) {
            setError(err.response.data)
            setOpen(true)
            setUsername('')
            setPassword('')

        }
    }

    const handleClose = () => {
        setOpen(false)
    };

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
            {error &&
                <DialogComp
                    isOpen={open}
                    onCloseHandle={handleClose}
                    title="User already exists"
                    content={"Please sign in instead."}
                    okButton={false}
                />}
        </div>
    )
}

export default Register