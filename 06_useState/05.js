import react, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    // here, we are making array of objects
    const [value, setValue] = useState(0);

	return(
        <div>
            <section>
                <h2>Regular Counter</h2>

                <h1>{value}</h1>
                
                <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
                <button className='btn' onClick={() => setValue(0)}>reset</button>
                <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
            </section>
        </div>
	)
}

export default App;