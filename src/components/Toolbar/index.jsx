import React, { useState, useEffect } from 'react';

import './style.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import Navbar from '../Navbar';

function Toolbar () {
  const [menuOptions, setMenuOptions] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);

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
        <button className={`${openMenu && 'active'}`} onClick={() => {
          setOpenMenu(!openMenu);
        }}>
          <Icon path={openMenu ? mdiClose: mdiMenu} size={1} />
        </button> 

        <Link to="/" className={`logo flex ${openMenu && 'left-large'}`}>
          <img src={ Logo } alt="Logotipo" height="50px"/>
        </Link>

        <Navbar opened={openMenu} menuOptions={menuOptions}/>

        {/* <nav>
          <ul>
            {
              menuOptions.map((key) => (
                <li className={`${key?.isBlack && 'spotlight'}`} key={`menuOption=${ key.link }`}>
                  <Link to={key.link}> { key.name } </Link>
                </li>
              ))
            }
          </ul>
        </nav> */}
      </div>
    </div>
  )
}

export default Toolbar;