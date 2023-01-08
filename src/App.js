import React from 'react';
import ReactDOM from 'react-dom';

//Header Component
const Header = (props) => {
  console.log(props); //empty object, {}

  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.welcome}</h2>
        <h3>{props.welcome}</h3>
        <h4>{props.welcome}</h4>
        <h5>{props.welcome}</h5>
        <h6>{props.welcome}</h6>
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

export default App;