import React from 'react';

import Toolbar from '../components/Toolbar';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

function Main() {
    return(
        <>
          <Toolbar />

          <Home />

          <AboutUs />
        </>
    )
}

export default Main;