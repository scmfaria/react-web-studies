import React, {useState, useEffect} from 'react';

import './style.scss';

import { Link } from 'react-router-dom';

function Navbar (props) {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize',  handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const propsRef = props;
  const isMobile = windowSize.width <= 719; 

  return (
    <div className="navbar">
        <nav style={{opacity: (isMobile && !propsRef?.opened) ? '0' : '1'}} 
          className={`${propsRef?.opened && 'active'}`}>
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