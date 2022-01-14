const router = require('express').Router()
const blogPost = require('../models/blogPost')
const User = require('../models/User')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

    try {
        const myBlogPosts = await blogPost.findAll({
            raw: true,
            where: {
                user_id: req.session.id
            }
        })
        console.log('======MYBLOGPOSTS========', myBlogPosts)
        res.status(200).render('dashboard', { loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {

    try {
        const createBlogPost = await blogPost.create(req.body)
        res.status(200).json(createBlogPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router