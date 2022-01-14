const router = require('express').Router()
const htmlRoutes = require('./htmlRoutes')
const userRoutes = require('./userRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const blogPostRoutes = require('./blogPostRoutes')

router.use('/', htmlRoutes)
router.use('/user', userRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/blogpost', blogPostRoutes)

module.exports = router