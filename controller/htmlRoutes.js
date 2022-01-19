const router = require('express').Router()
const { BlogPost, User } = require('../models/index')

router.get('/', async (req, res) => {

    try {
        const blogPosts = await BlogPost.findAll({
            include: [{ model: User, attributes: ['username'] }]
        })
        const allBlogPosts = blogPosts.map((data) => data.get({ plain: true }))
        res.status(200).render('homepage', { allBlogPosts, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router