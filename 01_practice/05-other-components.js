import React from 'react';
import ReactDOM from 'react-dom';


//Header Component
const Header = () => (
    <header>
        <div className="header-wrapper">
            <h1>Heading</h1>
            <p>this is some random paragraph</p>
        </div>
    </header>
)

//User Card component
const UserCard = () => (
    <div className="user-card">
        <img src="" alt="some random image" />
        <h2>Fahaad Abbadi</h2>
    </div>
)

//TechList Component
const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}


//Main component
const Main = () => (
    <main>
        <div className="main-wrapper">
            <p>Prerequisite to get started</p>
            <ul><TechList /></ul>
            <UserCard />
        </div>
    </main >
)

//Footer Component
const Footer = () => (
    <footer>
        <div className="footer-wrapper">
            <p>bruh</p>
        </div>
    </footer>
)

const App = () => (
    <div className="app">
        <Header />
        <Main />
        <Footer />
    </div>
)

const rootElement = document.getElementById('root');

//we render the app component using the ReactDOM package
ReactDOM.render(<App />, rootElement)