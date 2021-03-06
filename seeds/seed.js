const seedUser = require('./userSeeds')
const seedBlogPost = require('./blogPostSeeds')
const seedComment = require('./commentSeeds')
const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedUser()
    console.log('\n----- USER SEEDED -----\n')

    await seedBlogPost()
    console.log('\n----- BLOG POSTS SEEDED -----\n')

    await seedComment()
    console.log('\n----- Comment SEEDED -----\n')

    process.exit(0)
}

seedAll()