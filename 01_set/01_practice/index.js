import React from 'react';
import ReactDOM from 'react-dom';


//Header Component
const Header = () => (
    <header>
        <div className="header-wrapper">
            <h1>This is one way of writing the jsx element</h1>
            <p>I can keep paragraph</p>
            <b>I can keep some bold text</b>
            <p>I can even keep this blue link</p>
            <a href="https://www.youtube.com">Click here</a>
            <p>To be honest, We can keep HTML thing over here</p>
        </div>
    </header>
)

//user card component
const UserCard = () => (
    <div className="user-card">
        <img src="" alt="bruh" />
        <h1>This is user card</h1>
    </div>
)

//TechList Component
const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
}

//Main Component
const Main = () => (
    <main>
        <div className="main-wrapper">
            <p>Prerequisite to get started react.js</p>
            <ul>
                <TechList />
            </ul>
            <UserCard />
        </div>
    </main>
)

//footer component
const Footer = () => (
    <footer>
        <div className="footer-wrapper">
            <p>lol</p>
        </div>
    </footer>

)


//the app, or the parent or the container component
const App = () => (
    <div className="app">
        <Header />
        <Main />
        <Footer />
    </div>
)

const rootElement = document.getElementById('root');

//we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)