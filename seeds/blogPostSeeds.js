const blogPost = require('../models/blogPost')

const blogData = [{
    title: 'Test Title 1',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
    user_id: 1
},
{
    title: 'Test Title 2',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
    user_id: 1
},
{
    title: 'Test Title 3',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
    user_id: 1
}]

const seedBlogPost = () => blogPost.bulkCreate(blogData)

module.exports = seedBlogPost