import React, {useState} from 'react';

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