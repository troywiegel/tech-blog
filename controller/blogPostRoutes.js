const router = require('express').Router()
const { BlogPost, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

// GET one blogpost route
router.get('/:id', withAuth, async (req, res) => {

    try {
        const onePost = await BlogPost.findByPk(req.params.id, {
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

router.post('/comment', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            blogpost_id: req.body.id,
            user_id: req.session.user_id
        })
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err)
    }
})

// DELETE blogpost by id route
router.delete('/delete/:id', withAuth, async (req, res) => {
    console.log('DELETE ROUTE SMACKED', req.params.id)

    const deleted = await BlogPost.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json(deleted)
})

module.exports = router