import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

import AuthOrApp from './authOrApp.jsx'
import BillingCycle from '../billingCycle/billingCycle.jsx'
import Dashboard from '../dashboard/dashboard.jsx'

//import Dashboard from '../dashboard2/dashboard2.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='/billingCycle' component={BillingCycle}/>

        </Route>
        
        <Redirect from='*' to='/'/>

    </Router>

)