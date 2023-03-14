import react from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
	let title = 'random title';

	const handleClick = () => {
		title = 'hello people';
		console.log(title);
	}

	return(
		<div>
			<h2>{title}</h2>

			<button type="button" className="btn" onClick={handleClick}>
				change title
			</button>
		</div>
	)
}

export default App;