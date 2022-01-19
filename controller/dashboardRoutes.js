const router = require('express').Router()
const { BlogPost, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

    try {
        const blogPosts = await BlogPost.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ['username'] }]
        })
        const myBlogPosts = blogPosts.map((data) => data.get({ plain: true }))
        res.status(200).render('dashboard', { myBlogPosts, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/newBlogpost', async (req, res) => {

    try {
        res.status(200).render('newBlogpost', { loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/newBlogpost', withAuth, async (req, res) => {

    try {
        const createBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(createBlogPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router