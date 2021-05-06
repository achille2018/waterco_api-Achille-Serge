import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Payment = sequelize.define('payment', {

  //   BillId: {
  //     type: Sequelize.INTEGER,

  //     // To increment user_id automatically.
  //     autoIncrement: true,

  //     // user_id can not be null.
  //     allowNull: false,

  //     // For uniquely identify user.
  //     primaryKey: true
  //   },
  paymentId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  payment: { type: Sequelize.INTEGER, allowNull: false },

  paymentClientId: { type: Sequelize.INTEGER, allowNull: false },

  paymentDate: { type: Sequelize.DATE, allowNull: false }

}, {
  sequelize,
  tableName: 'payment',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'paymentId' }
      ]
    }
  ]
})

export default Payment
