import { useState } from 'react'

const useForm = submitCallback => {
    const [state, setState] = useState({})

    const handleSubmit = e => {
        e.preventDefault();
        submitCallback()
        
    }

    const handleChange = e => {
        setState(state => ({ ...state, [e.target.name]: e.target.value}))
    }

    return [state, handleChange, handleSubmit];
}

export default useForm;