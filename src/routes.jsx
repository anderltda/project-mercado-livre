import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Item from './pages/Item';

const Routes = () => (

    <Switch>
        <Route exact path='/' component={Search} />

        <Route exact path='/item/:id' component={Item} />

        <Route component = { () => (
            <div>Page not found</div>
        )} />
    </Switch>

);

export default Routes;