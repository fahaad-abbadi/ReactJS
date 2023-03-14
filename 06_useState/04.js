import react, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    // here, we are making array of objects
    const [person, setPerson] = useState({
        name: 'peter', 
        age: 24,
        message: 'random message'
    })

    const changeMessage = () => {
        if(person.message === 'random message')
        {
            setPerson({...person, message: 'hello world'})
        }
        else{
            setPerson({...person, message: 'random message'});
        }
    }

	return(
		<div>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>

            <button className='btn' onClick={changeMessage}>Change Message</button>
		</div>
	)
}

export default App;