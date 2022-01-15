const router = require('express').Router()
const { BlogPost, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

    try {
        const myBlogPosts = await BlogPost.findAll({
            raw: true,
            where: {
                user_id: req.session.user_id
            }
        })
        if (!myBlogPosts) {
            return
        }
        res.status(200).render('dashboard', { myBlogPosts, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', withAuth, async (req, res) => {

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