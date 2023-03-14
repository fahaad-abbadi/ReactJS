import React, {useState} from 'react';

// when the button is clicked the changes are only made in the console but not in the browser
function App(){

    const inputRef = React.useRef(null);

    function handleClearInput()
    {
        inputRef.current.value = "";
        inputRef.current.focus();
    }

	return(
        <form>
            <input type="text" ref={inputRef}></input>

            <button type="button" onClick={handleClearInput}>Clear</button>
        </form>
	)
}

export default App;