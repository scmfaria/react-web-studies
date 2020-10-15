import React, { useState, useEffect } from 'react';

import './style.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Toolbar () {
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    if(!menuOptions.length) {
      setMenuOptions(
        [
          { link: '/sobre', name: 'Sobre' }, 
          { link: '/solucoes', name: 'Soluções' }, 
          { link: '/tecnologia', name: 'Tecnologia' }, 
          { link: '/contato', name: 'Contato' }, 
          { link: '/blog', name: 'Blog' , isBlack: true}, 
        ]
      );
    }
  }, [menuOptions])

  return (
    <div className="header">
      <div className="container flex">
        <Link to="/" className="logo flex">
          <img src={ Logo } alt="Logotipo" height="50px"/>
        </Link>
        <nav>
          <ul>
            {
              menuOptions.map((key) => (
                <li className={`${key?.isBlack && 'spotlight'}`} key={`menuOption=${ key.link }`}>
                  <Link to={key.link}> { key.name } </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Toolbar;