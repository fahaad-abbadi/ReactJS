import React from 'react';
import ReactDOM from 'react-dom';

//skills component
const Skills = (props) => <ul>{props.skills}</ul>

const App = () => (
    <div className="app">
        <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)