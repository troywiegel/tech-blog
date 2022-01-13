// const seedUser = require('./userSeeds')
const seedBlogPost = require('./blogPostSeeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('\n----- DATABASE SYNCED -----\n')

    await seedBlogPost()
    console.log('\n----- BLOG POSTS SEEDED -----\n')

    process.exit(0)
};

seedAll()