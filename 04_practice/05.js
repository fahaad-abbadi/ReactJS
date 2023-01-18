import React from 'react';

//class base component
class Header extends React.Component{
    constructor(props){
        super(props)
        //the code inside the constructor is run before any other code
    }

    render(){
        return(
            <header>
                <div className="header-wrapper">
                    <h1>This is some random heading</h1>
                </div>
            </header>
        )
    }
}

//TechList component
//class base component
class TechList extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render(){
        const techs = ['HTML', 'CSS', 'JavaScript'];
        const techsFormatted = techs.map((tech)=> <li key = {tech}>{tech}</li>)
        return techsFormatted
    }
}

//main component
//class component
class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <main>
                <div className="main-wrapper">
                    <p>Prerequise to get started react</p>

                    <ul>
                        <TechList/>
                    </ul>
                </div>
            </main>
        )
    }
}

//Footer Component
//class component
class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer>
                <div className="footer-wrapper">
                    <p>Copyright</p>
                </div>
            </footer>
        )
    }
}

//The app or the parent or the container component
//class component

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}