import React from 'react';
import './style.scss';

function Card(props) {
    const refProps = props;

    return (
        <>
        {
            refProps?.aboutUsList.map((key, index) => (
                <li key={`item-${index}`}>
                    {key.image}
                    <h3>{key.title}</h3>
                </li>
            ))
        }
        </>
    )
}

export default Card;