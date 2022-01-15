const Comment = require('../models/Comment')

const commentData = [{
    comment: 'This is a test comment',
    blogpost_id: 1,
    user_id: 1
}]

const seedComment = () => Comment.bulkCreate(commentData)

module.exports = seedComment