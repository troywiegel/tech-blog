const User = require('../models/User')

const userData = [{
    name: 'Seed User',
    username: 'seeduser1',
    email: 'seeduser@seed.com',
    password: 'seed123456789'
}]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser