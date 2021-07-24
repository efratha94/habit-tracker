import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import { UserContext } from "../../Utils/UserContext"


const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    let history = useHistory();
    const { login, setLogin, activeUser, setActiveUser } = useContext(UserContext);

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
        <>
            <form onSubmit={handleSubmit}>

                <label>Username:</label>
                <input
                    value={username || ''}
                    name="username"
                    required
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                />
                <label>Password:</label>
                <input
                    value={password || ''}
                    name="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                    type="text"
                />

                <button>Register!</button>
            </form>
            
            {error ? <div>{error}</div> : null} {/* should be refined */}
        </>
    )
}

export default Register