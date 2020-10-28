import React from 'react';

import Toolbar from '../components/Toolbar';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Form from '../pages/Form';

function Main() {
    return(
        <>
          <Toolbar />

          <Home />

          <AboutUs />

          <Form />
        </>
    )
}

export default Main;