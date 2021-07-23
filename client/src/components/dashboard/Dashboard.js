import React from 'react'
import Card from "./Card"
import Habits from "./Habits"

const Dashboard = ({match}) => {

    return (
        <Card className="habits">
            <Habits />
        </Card>
    )
}

export default Dashboard