import React from 'react';
import './style.scss';

function Card (props) {
  const refProps = props;

  return (
    <div className="card-wrap flex">
      {
        refProps?.aboutUsList.map((key, index) => (
          <div key={`item-${index}`} className="card flex">
            <div>
              {key.image}
            </div>
            <div>
              <h3>{key.title}</h3>
              <p>{key.text}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Card;