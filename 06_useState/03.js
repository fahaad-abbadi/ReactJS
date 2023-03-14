import react, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    // here, we are making array of objects
    const data = 
    [
        // each object has key and properties
        {id: 1, name : 'Fahaad'},
        {id: 2, name : 'Bladey'},
        {id: 3, name : 'Peteor'},
        {id: 4, name : 'Blahya'},
    ];


    // here, we use state
    const [people, setPeople] = useState(data);


    // for removing item, we use filter
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    } 

	return(
		<div>
			{
                // 'people' is an object
                people.map((person) => {
                    const {id, name} = person;

                    // inside return we write JSX
                    return(
                        <div key={id} className="item">
                            <h4>{name}</h4>
                            <button onClick={()=>removeItem(id)}>remove</button>
                        </div>
                    )
                })
            }
		</div>
	)
}

export default App;