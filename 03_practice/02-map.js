import React from 'react';

const Numbers = ({ numbers }) => {
    const list = numbers.map((number) => <li>{number}</li>)
    return list;
}

//App Component
const App = () => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div className="container">
            <div>
                <h1>Number List</h1>

                <ul>
                    <Numbers numbers={numbers} />
                </ul>
            </div>
        </div>
    )
}