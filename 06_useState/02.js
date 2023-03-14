import react, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    const [title, setTitle] = useState('random title');

	const handleClick = () => {
        if(title === 'random title')
        {
            setTitle('hello world');
        }
        else{
            setTitle('random title')
        }
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