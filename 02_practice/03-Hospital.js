import React from 'react';
import ReactDOM from 'react-dom';

import './css/App.css';
import './css/Hospital.css';
import './css/Name.css';
import './css/Socials.css';


// in the last snippet we saw that the first 'div' was repeating too
// to avoid this, we can write that in a separate component
//use the css properties in quotations

//this is one of the components
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
class Ward extends React.Component{
	render()
	{
		// JSX elements must be wrapped in one parent element, i.e. one tag onl
		return(
			<div className="ward">
				<h3>This is {this.props.type} ward</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse alias et aliquam eligendi, minus repellat non id. Dignissimos, sapiente temporibus.</p>

				<br />

				<h3>Timings</h3>
				<p>24X7</p>
			</div>
		)
	}
}

class Details extends React.Component{
	render()
	{
		return(
			<div className="location">
				<h4>Meet us near {this.props.address}</h4>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, architecto?</p>
			</div>
		)
	}
}

class Socials extends React.Component{
	render()
	{
		return(
			<div className="container">
				<div className="socials">
					<a href={this.props.link}>
						<h4>{this.props.socialmedia}</h4>
					</a>	
				</div>
			</div>
		)
	}
}

const App = () => {
	return (
        <div className="app">
            <Name name = "Hyderabad"/>

            <Ward type = "emergency"/>
            <Ward type = "trauma"/>
            <Ward type = "general"/>

			<Details address = "Yousufguda"/>

			<Socials socialmedia = "Twitter" link = "https://www.twitter.com"/>
			<Socials socialmedia = "Instagram" link = "https://www.instagram.com"/>
			<Socials socialmedia = "facebook" link = "https://www.facebook.com"/>
        </div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;