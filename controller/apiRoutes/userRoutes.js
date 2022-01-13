const router = require('express').Router()
const User = require('../../models/User')

// GET login route
router.get('/login', async (req, res) => {

    try {
        if (req.session.loggedIn) {
            res.redirect('/')
        } else {
            res.status(200).render('login')
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

// POST signup route
router.post('/signup', async (req, res) => {

    try {
        const newUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }, { raw: true })

        req.session.save(() => {
            req.session.user_id = newUserData.id;
            res.status(200).json({ message: 'Thanks for signing up!' })
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

// POST login route
router.post('/login', async (req, res) => {

    try {
        const userData = await User.findOne({ where: { email: req.body.email } })

        if (!userData) {
            res.status(400).json({ message: 'user not found' })
        }

        const validPassword = await userData.checkPassword(req.body.password)

        if (validPassword === false) {
            res.status(400).json({ message: 'password wrong' })
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.loggedIn = true

            res.status(200).json(userData)
        })

    } catch (err) {
        res.status(400).json(err)
    }
})

// DELETE logout route
router.post('/logout', async (req, res) => {

    try {
        if (req.session.user_id) {
            req.session.destroy(() => {
                res.status(200).json({ message: 'You have been logged out!' })
            })
        } else {
            res.status(200).json({ message: 'You are not logged in!' })
        }
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router