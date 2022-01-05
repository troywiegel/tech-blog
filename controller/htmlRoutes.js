const router = require('express').Router()
const blogPost = require('../models/blogPost')

router.get('/', async (req, res) => {

    const blogPosts = await blogPost.findAll({ raw: true })

    res.render('dashboard', { allBlogPosts: blogPosts })

})



module.exports = router