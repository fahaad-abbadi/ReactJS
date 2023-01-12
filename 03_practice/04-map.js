import React from 'react';

const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
]

//country component
const Country = ({ country: { name, city } }) => {
    return (    
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    )
}

//countries component
const Countries = ({ countries }) => {
    const countryList = countries.map((country) => <Country country={country} />)
    return <div>{countryList}</div>
}

//App component
const App = () => (
    <div className="container">
        <div>
            <h1>Countries</h1>
            <Countries countries={countries} />
        </div>
    </div>
)