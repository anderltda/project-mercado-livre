import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Item from './pages/Item';
const path = window.location.hostname !== 'localhost' ? '/project-mercado-livre/' : '/';
const Routes = () => (
    <Switch>
        <Route
            exact
            path={path}
            component={Search}
        />
       
        <Route exact
            path={`${path}item/:id`}
            component={Item}
        />
        <Route
            component={ () => (
                <div>Page not found</div>
            ) }
        />
    </Switch>
);

export default Routes;