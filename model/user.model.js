import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const User = sequelize.define('user', {

  userId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  firstName: { type: Sequelize.STRING(225), allowNull: false },

  lastName: { type: Sequelize.STRING(225), allowNull: false },

  emailAddress: { type: Sequelize.STRING(225), allowNull: false },

  userPassword: { type: Sequelize.STRING(225), allowNull: false },

  userCity: { type: Sequelize.STRING(225), allowNull: false },

  userCountry: { type: Sequelize.STRING(225), allowNull: false }

}, {
  sequelize,
  tableName: 'user',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'userId' }
      ]
    }
  ]
})

export default User
