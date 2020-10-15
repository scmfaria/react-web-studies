// todo arquivo jsx primeiro tem que importar o react
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../pages/main';

// Redirect -> usado para pag 404

function Routes() {
    const render = () => {
        return (
            <Switch>
                <Route path="/" exact component={ Main } />
            </Switch>
        )
    }

    return render();
}

export default Routes;