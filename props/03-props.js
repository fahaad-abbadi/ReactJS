import React from 'react';
import ReactDOM from 'react-dom';

//Header Component
const Header = (props) => {
    console.log(props);

    return (
        <header>
            <div className="header-wrapper">
                <h1>{props.welcome}</h1>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>

                <p>{props.firstName} {props.lastName}</p>
            </div>
        </header>
    )
}


//The app or the parent or the container component
//functional component

const App = () => (
    <div className='app'>
        <Header
            welcome='Welcome to 30 Days Of React'
            title='Getting Started React'
            subtitle='JavaScript Library'
            firstName='Fahaad'
            lastName='Abbadi'
            date='Oct 4, 2020'
        />
    </div>
)

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)