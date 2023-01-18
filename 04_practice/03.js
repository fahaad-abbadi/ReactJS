import React from 'react';
import ReactDOM from 'react-dom';

//class based component
class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="header-wrapper">
                    <h1>This is some heading</h1>
                </div>
            </header>
        )
    }
}