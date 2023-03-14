import React, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    const [user, setUser] = useState('null');

    React.useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data=> setUser(data.results[0]))
    }, [])
    
	return(
        <div>
            <h1>This some heading</h1>
            <button>Change color</button>

            <h3>Current User : </h3>
            <pre>{JSON.stringify(user,null, 2)}</pre>
        </div>
	)
}

export default App;