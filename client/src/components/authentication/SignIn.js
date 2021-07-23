import React, { useState } from 'react'
import axios from "axios"

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = async e => {

        try {
            
            e.preventDefault();
            let resp = await axios.post("http://localhost:3001/signInUser", { username, password })
            
            if (error) setError('') ;
            setUsername('')
            setPassword('')

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

                <button>Login!</button>
            </form>
            
            {error ? <div>{error}</div> : null} {/* should be refined */}
        </>
    )
}

export default SignIn