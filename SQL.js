import Sequelize from 'sequelize'
import { sequelize } from './db/dbConnect.js'

const User = sequelize.define('user', {
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
})

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User)
