import React from 'react';
import CardItem from './CardItem';

function Cards()
{
    return(
        <div className="cards">

            <h1>Check the destinations</h1>

            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards;
