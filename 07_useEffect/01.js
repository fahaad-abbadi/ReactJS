import React, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){
    const [color, setColor] = useState('black');
    // here, we are making array of objects

    function changeColor()
    {
        if(color === 'black')
            setColor('blue');
        else
            setColor('black');
    }

    React.useEffect(() => {
        document.body.style.background = color;
        document.body.style.color = 'white';
        document.body.style.fontSize = '20px';

        console.log('this some console thing');
    },[color])

	return(
        <div>
            <h1>This some heading</h1>
            <button onClick = {changeColor}>Change color</button>
        </div>
	)
}

export default App;