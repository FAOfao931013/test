import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import Index from 'components/Index';
import A from 'components/Index/A';
import B from 'components/Index/B';
import C from 'components/Index/C';

let routes = (
    <div>
        <Route path="/number" component={rootNode}>
            <Route path="i" component={Index}/>
            <Route path="a" component={A}/>
        </Route>
        <Route path="/another" component={rootNode}>
            <Route path="b" component={B}/>
            <Route path="c" component={C}/>
        </Route>
    </div>
);

export default routes;