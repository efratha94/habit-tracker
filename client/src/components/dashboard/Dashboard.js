import React, { useState, useEffect, useContext, useCallback,  useRef } from 'react'
import axios from 'axios'
import Card from "./Card"
import Habits from "./Habits"
import NewHabit from './NewHabit'
import { UserContext } from '../../utils/UserContext'
import "./Dashboard.css"

const Dashboard = () => {
    const [habits, setHabits] = useState([])
    const [habit, setHabit] = useState('')
    // const [value, setValue] = useState(0)
    const { activeUser } = useContext(UserContext)
    // const myCallbackList = useRef([])

    // const setStateWithCallback = (newHabit, callback) => {
    //     setHabits((prevHabits) => {
    //         return [newHabit, ...prevHabits]
    //     })
    //     if (callback) myCallbackList.current.push({func: callback, args: newHabit})
    // }

    // useEffect(() => {
    //     myCallbackList.current.forEach((callback) => {
    //         callback.func(...callback.args)
    //     })
    //     myCallbackList.current = [];
    // }, [setHabits]);

    const addHabitHandler = (habit) => {
        console.log(habit)
        setHabit(habit)
    }


    useEffect(() => {
        const getHabits = async () => {
            const listOfHabits = await axios.get(`http://localhost:3001/habits/${activeUser}`)
            console.log("listOfHabits", listOfHabits)
            setHabits(listOfHabits.data)
        }
        getHabits()
        }, [setHabits])

    // const getHabits = useCallback(() => {
    //     axios.get(`http://localhost:3001/habits/${activeUser}`).then(response => {
    //         setHabits(response.data)
    //     })
    //     // console.log("listOfHabits", listOfHabits)
    // })

    // useEffect(() => {}, [getHabits])

    return (
        <Card className="habits">
            <NewHabit onAddHabit={addHabitHandler}/>
            <Habits habits={habits} />
        </Card>
    )
}

export default Dashboard