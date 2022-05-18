import PieChart from './PieChart';
import {useContext} from 'react';
import UserContext from '../context/UserContext'

const TrackerDisplay = ({glasses}) => {

        const user = useContext(UserContext)


    return (
        <>
            <p>{user.name}'s daily goal: {user.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} />
            { glasses >= user.goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
