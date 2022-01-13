const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
const userRoutes = require('./apiRoutes/userRoutes')
const dashboardRoutes = require('./apiRoutes/dashboardRoutes')

router.use('/', htmlRoutes)
router.use('/user', userRoutes)
router.use('/dashboard', dashboardRoutes)

module.exports = router