const blogPost = require('../models/blogPost')

const blogData = [{
    title: 'Test Title 1',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
},
{
    title: 'Test Title 2',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
},
{
    title: 'Test Title 3',
    body: 'dsfjslfjsdklfjlsdkjfklsdjfklsdjfklsdjfklsdjfklsdjfklsdjfklsjfsd',
}]

const seedBlogPost = () => blogPost.bulkCreate(blogData)

module.exports = seedBlogPost