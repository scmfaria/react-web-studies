import React from 'react';

import './style.scss';

import { Link } from 'react-router-dom';

function Navbar (props) {
  const propsRef = props;

  return (
    <div className="navbar">
        <nav className={`${propsRef?.opened && 'active'}`}> 
          <ul>
            {
              propsRef.menuOptions.map((key) => (
                <li className={`${key?.isBlack && 'spotlight'}`} key={`menuOption=${ key.link }`}>
                  <Link to={key.link}> { key.name } </Link>
                </li>
              ))
            }
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;