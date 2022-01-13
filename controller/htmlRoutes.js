const router = require('express').Router()
const blogPost = require('../models/blogPost')

router.get('/', async (req, res) => {

    try {
        const allBlogPosts = await blogPost.findAll({ raw: true })

        res.status(200).render('homepage', { allBlogPosts, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router