import React, { useState } from 'react'

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(username, password)
        setUsername('')
        setPassword('')
        //push to db
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
        </>
    )
}

export default Register