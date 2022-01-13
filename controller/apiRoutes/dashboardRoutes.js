const router = require('express').Router()
const withAuth = require('../../utils/auth')

router.get('/', withAuth, async (req, res) => {

    try {
        res.status(200).render('dashboard', { loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router