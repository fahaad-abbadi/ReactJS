import React from 'react'
import ReactDOM from 'react-dom'

// Function to display time in Mon date, year format eg Oct 4, 2020
const showDate = (time) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
}

//button component
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

//The app or the parent or the container component
//functional component

const App = () => {
    const handleTime = () => {
        alert(showDate(new Date()))
    }

    const greetPeople = () => {
        alert('this is react thing')
    }

    return (
        <div className="app">
            <Button text='show time' onClick={handleTime} />
            <Button text='Greet People' onClick={greetPeople} />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)