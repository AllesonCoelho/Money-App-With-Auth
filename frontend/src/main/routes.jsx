import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import AuthOrApp from './authOrApp.jsx'
import BillingCycle from '../billingCycle/billingCycle.jsx'
import Dashboard from '../dashboard/dashboard.jsx'

//import Dashboard from '../dashboard2/dashboard2.jsx'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/billingCycle' component={BillingCycle}/>
                <Redirect from='*' to='/'/>        
        </Switch>
    </div>

)