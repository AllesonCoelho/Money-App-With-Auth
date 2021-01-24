const express = require('express')
const auth = require('./auth.js')


module.exports = function(server){
     // Rotas abertas por JWT
    const protectedApi = express.Router()
    server.use('/api', router)

    protectedApi.use(auth)
    //Rotas abertas

    const BillingCycle = require('../api/billingCycles/billingCyclesService')
    BillingCycle.register(protectedApi, '/billingCycles')

    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService.js')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signUp)
    openApi.post('/validateToken', AuthService.validateToken)
}