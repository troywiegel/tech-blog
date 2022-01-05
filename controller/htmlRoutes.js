const router = require('express').Router()
const blogPost = require('../models/blogPost')

router.get('/', async (req, res) => {

    const allBlogPosts = await blogPost.findAll({ raw: true })

    res.render('homepage', { allBlogPosts })

})

module.exports = router