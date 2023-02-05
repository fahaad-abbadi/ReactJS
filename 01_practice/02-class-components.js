import React from 'react';
import ReactDOM from 'react-dom';

// similar to function components, we have class components
//to write class component, use 'extends' keyword and write React.Component


//then write 'render()'
//render should have a return statement
class Sample extends React.Component {
	render() {
		return(
			<div className="para">
			<h1>This is car</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor laudantium nobis possimus quaerat, accusantium deleniti culpa quia exercitationem minus nostrum.</p>

			<br />

			<h1>This is race car</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut animi laboriosam nemo ad, temporibus consectetur vel pariatur est iure.</p>
			</div>
		)
	}
}

//likeweise, we can create multiple classes and use it in the 'App' Component
class Hospital extends React.Component{
	render()
	{
		// JSX elements must be wrapped in one parent element, i.e. one tag onl
		return(
			<div className="wards">
				<div className='hospital-name'>
					<h1>This is Hospital</h1>
				</div>

				<div className="general-ward">
					<h3>This is general ward</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse alias et aliquam eligendi, minus repellat non id. Dignissimos, sapiente temporibus.</p>

					<br />

					<h3>Timings</h3>
					<p>24X7</p>
				</div>

				<div className="emergency-ward">
					<h3>This is emergency ward</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse alias et aliquam eligendi, minus repellat non id. Dignissimos, sapiente temporibus.</p>

					<br />

					<h3>Timings</h3>
					<p>24X7</p>
				</div>

				<div className="trauma-ward">
					<h3>This is emergency ward</h3>
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
		<Sample/>
		<Sample/>
		<Hospital/>
	</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;