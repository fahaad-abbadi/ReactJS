import React from 'react';
import ReactDOM from 'react-dom';

const welcome = 'welcome to 30 days of React';
const title = 'Getting started React';
const subtitle = 'Javascript library';
const firstName = 'Fahaad';
const lastName = 'Abbadi';


//JSX element, header
const Header = () => {
    return (
        <header>
            <div className='header-wrapper' >
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                <p>
                    Name : {firstName} {lastName}
                </p>
            </div>
        </header>
    )
}

const rootElement = document.getElementById('root');

//we render the App component using the ReactDOM package
ReactDOM.render(<Header />, rootElement)