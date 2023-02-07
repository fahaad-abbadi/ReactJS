import React from 'react';
import ReactDOM from 'react-dom';

//Header Component
const Header = (props) => {
    console.log(props); //empty object, {}

    return (
        <header>
            <div className="header-wrapper">
                <h1>{props.welcome}</h1>
            </div>
        </header>
    )
}

//The app, or the parent or the container component
//Functional component

const App = () => {
    return (
        <div className="app">
            <Header welcome='This is some ReactJS thing' />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)