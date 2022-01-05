const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
const dashboardRoutes = require('./apiRoutes/dashboardRoutes')
const loginRoutes = require('./apiRoutes/loginRoutes')

router.use('/', htmlRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/login', loginRoutes)

module.exports = router