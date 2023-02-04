import React from 'react';
import ReactDOM from 'react-dom';

//function components
// make sure that the first letter is capital

// normal JavaScript function
const Sample = () => {
      console.log("This some random text ig?")
}

// we can use this HTML kinda thing in ReactJS, this is called JSX
// we have to write it in 'return' thing
const Result = () => {
      return(<h1>This is some heading thing</h1>)
}

const Car = () => {
      return (
        <div>
          <h3>This is Car</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque ad quibusdam quasi temporibus possimus reiciendis quae tenetur debitis commodi.</p>
                  
          <br />

          <h4>This is Race Car</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique debitis vero, nihil veniam dolorem in iure aperiam aspernatur ullam.</p>
        </div>
      )
}
// likewise, you can create several function(components)


//like function parameter or arguments, we can also use a thing called 'props'
// it means properties

//Header Component
const GetUserInfo = (props) => {
  return(
    <div>
        <h3>{props.firstName} {props.lastName}, a {props.title} developer based in {props.country}</h3>
    </div>
  ) 
}

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
// Now keep those components tags in this 'App' component


//You can see the benefits, we are writing component once and using it multiple times
//Whereas in HTML, we keep writing stuff and the HTML script becomes very long
// we can use the component multiple times too
const App = () => {
  return (
    <div className="app">
      <Car/>
      <Result/>
      <Sample/>
      <Header welcome='This is some ReactJS thing' />
      <GetUserInfo firstName = "fahaad" lastName = "abbadi" title="ReactJS" country = "India"/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;