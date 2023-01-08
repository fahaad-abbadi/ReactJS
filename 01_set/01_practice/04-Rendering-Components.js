import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => (
    <header>
        <div className="header-wrapper">
            <h1>This is one way of writing the jsx element</h1>
            <p>I can keep paragraph</p>
            <b>I can keep some bold text</b>
            <p>I can even keep this blue link</p>
            <a href="https://www.youtube.com">Click here</a>
            <p>To be honest, We can keep HTML thing over here</p>
        </div>
    </header>
)

const rootElement = document.getElementById('root');

//we render the JSX element using the ReactDOM package
ReactDOM.render(<Header />, rootElement)