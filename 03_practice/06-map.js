import React from 'react';
import ReactDOM from 'react-dom';

//using boolean values
const Status = (props) => {
	let status = props.status ? 'old enough to drive' : 'Too young for driving';
	return <h3>{status}</h3>
}

//using boolean props in class Components
//we use render method and keep {}, inside {} we write code, then we use return(), inside () we write JSX
class Requirement extends React.Component {
	render()
	{
		let status = this.props.status ? 'Aight you pass' : 'bruhh where yo docs??';

		//in 'return', write only the JSX part
		return(
				<h3>{status}</h3>
		)
	}
}


//aight, in the above part, only one argument was passed, multiple can be passed too
//passing an array and some props thing
class Ship extends React.Component {
	render() 
	{
		return(
			<ul>{this.props.boxes}</ul>
		)
	}
}

class Cargo extends React.Component {
	render() 
	{
		//this map thing is very crucial, it kinda looks more of website thing
		//here, we converting it to HTML kinda, so yee it imp
		//each element is from the boxes is converted to list, that is the use of 'map'
		const items = this.props.boxes.map((box) => <li>{box}</li>)
		return(
			<ul>{items}</ul>
		)
	}
}

const App = () => {
	let age  = 18;
	let eligibility = age > 18;

	return (
        <div className="app">
			<Status status = {eligibility}/>
			<Requirement status = {eligibility}/> 

			<Ship boxes={['Mouse', 'Keyboards', 'Laptops']} />
			<Cargo boxes={['Mouse', 'Keyboards', 'Laptops']} />
        </div>
	)
}	

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;