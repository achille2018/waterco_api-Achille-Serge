import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const client = sequelize.define('client', {

  //   BillId: {
  //     type: Sequelize.INTEGER,

  //     // To increment user_id automatically.
  //     autoIncrement: true,

  //     // user_id can not be null.
  //     allowNull: false,

  //     // For uniquely identify user.
  //     primaryKey: true
  //   },
  clientId: { autoIncrement: true, type: Sequelize.INTEGER(20), allowNull: false, primaryKey: true },

  firstName: { type: Sequelize.STRING(225), allowNull: false },

  lastName: { type: Sequelize.STRING(225), allowNull: false },

  email: { type: Sequelize.STRING(225), allowNull: false },

  clientPassword: { type: Sequelize.STRING(500), allowNull: false },

  clientAddress: { type: Sequelize.STRING(225), allowNull: false },

  balance: { type: Sequelize.INTEGER(20), allowNull: false },

  paymentPlan: { type: Sequelize.STRING(225), allowNull: false },

  clientSectorId: { type: Sequelize.INTEGER(20), allowNull: false },

  clientzoneId: { type: Sequelize.INTEGER(20), allowNull: false }
}, {
  sequelize,
  tableName: 'client',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'clientId' }
      ]
    }
  ]
})

export default client
