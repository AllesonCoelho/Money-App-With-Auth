import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as taostrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer.js'
import TabReducer from '../common/tab/tabReducer.js'
import BillingCycleReducer from '../billingCycle/billingCycleReducer.js'
import AuthReducer from '../../src/auth/authReducer.js'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: taostrReducer,
    auth: AuthReducer
})


export default rootReducer