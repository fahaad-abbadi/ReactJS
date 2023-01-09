import React from 'react';
import ReactDOM from 'react-dom';


const showDate = (time) => {
    const months = [
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const month = months[time.getMonth().slice(0, 3)];
    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`
}

//Header Component
const Header = ({
    data: {
        welcome,
        title,
        subtitle,
        author: {
            firstName,
            lastName
        },
        date,
    },
}) => {
    return (
        <header>
            <div className="header-wrapper">
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>

                <p>{firstName} {lastName}</p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    )
}

//TechList Component
const TechList = ({ techs }) => {
    const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techList
}

//UserCard Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className="user-card">
        <img src={image} alt={firstName} />

        <h2>{firstName}{lastName}</h2>
    </div>
)

// button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
)

//CSS styles in JavaScript Object
const buttonStyles = {
    backgroudColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white'
}


//Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
    <main>
        <div className="main-wrapper">
            <p>some react project thing</p>

            <ul><TechList techs={techs} /></ul>

            <UserCard user={user} />
            <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
            <Button text='show time' onClick={handleTime} style={buttonStyles} />
        </div>
    </main>
)