//we can pass a function as props type to a react component

import React from 'react';
import ReactDOM from 'react-dom';

//a button component
const Button = (props) => <button onClick={props.onClick}></button>

//The App, or the parent or the container component
//Function Component
const App = () => {
    const sayHi = () => {
        alert('Hi')
    }

    return (
        <div className="app">
            <Button text='Say Hi' onClick={sayHi} />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)