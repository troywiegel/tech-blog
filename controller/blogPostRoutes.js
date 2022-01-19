const router = require('express').Router()
const { BlogPost, User } = require('../models/index')
const withAuth = require('../utils/auth')

// GET one blogpost route
router.get('/:id', withAuth, async (req, res) => {
    try {
        const oneBlogPost = await BlogPost.findAll({
            where: { id: req.params.id },
            include: [{ model: User, attributes: ['username'] }]
        })
        const onePost = oneBlogPost.map((data) => data.get({ plain: true }))
        res.status(200).render('blogpost', { onePost, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err)
    }
})

// DELETE blogpost by id route
router.delete('/delete/:id', withAuth, async (req, res) => {
    const deleted = await BlogPost.destroy({
        where: { id: req.params.id }
    })

    res.json(deleted)
})

module.exports = router