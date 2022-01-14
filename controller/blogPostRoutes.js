const router = require('express').Router()
const blogPost = require('../models/blogPost')
const User = require('../models/User')
const withAuth = require('../utils/auth')

router.get('/:id', withAuth, async (req, res) => {

    try {
        const onePost = await blogPost.findByPk(req.params.id, {
            raw: true,
            // include: [{ 
            //     model: User,
            //     attributes: ['username']
            //  }]
        })

        res.status(200).render('blogpost', { onePost, loggedIn: req.session.loggedIn })
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/delete/:id', withAuth, async (req, res) => {
    console.log('DELETE ROUTE SMACKED', req.params.id)

    const deleted = await blogPost.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json(deleted)
})

module.exports = router