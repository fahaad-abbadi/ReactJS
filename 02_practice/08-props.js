import React from "react"
import { ReactDOM } from "react"

// Header Component
const Header = (props) => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{props.data.welcome}</h1>
                <h2>{props.data.title}</h2>
                <h3>{props.data.subtitle}</h3>
            </div>
        </header>
    )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
    }

    return (
        <div className='app'>
            <Header data={data} />
        </div>
    )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)