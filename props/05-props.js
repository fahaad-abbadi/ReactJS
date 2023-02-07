import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
    // ternary operator to check the status of the person
    let status = props.status ? 'Old enough to drive' : 'Too young for driving'
    return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
    let currentYear = 2020
    let birthYear = 2015
    const age = currentYear - birthYear // 15 years

    let status = age >= 18

    return (
        <div className='app'>
            <Status status={status} />
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)