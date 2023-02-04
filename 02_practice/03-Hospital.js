import React from 'react';
import ReactDOM from 'react-dom';

// in the last snippet we saw that the first 'div' was repeating too
// to avoid this, we can write that in a separate component
class Name extends React.Component{
    render()
    {
        return(
				<div className='hospital-name'>
					<h1>{this.props.name} Hospital</h1>
				</div>
        )
    }
}

//since, class can make objects, we need to use the 'this' keyword before writing props
class Hospital extends React.Component{
	render()
	{
		// JSX elements must be wrapped in one parent element, i.e. one tag onl
		return(
			<div className="wards">
				<div className="ward">
					<h3>This is {this.props.type} ward</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse alias et aliquam eligendi, minus repellat non id. Dignissimos, sapiente temporibus.</p>

					<br />

					<h3>Timings</h3>
					<p>24X7</p>
				</div>
                
			</div>
		)
	}
}

const App = () => {
	return (
        <div className="app">
            <Name name = "Hyderabad"/>
            
            <Hospital type = "general"/>
            <Hospital type = "emergency"/>
            <Hospital type = "trauma"/>
        </div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;