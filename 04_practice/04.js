import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <div className="header-wrapper">
                    <h1>This is some random heading but this code has got both constructors or super keyword</h1>
                </div>
            </header>
        )
    }
}