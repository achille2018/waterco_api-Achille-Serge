import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Bill = sequelize.define('bill', {

  //   BillId: {
  //     type: Sequelize.INTEGER,

  //     // To increment user_id automatically.
  //     autoIncrement: true,

  //     // user_id can not be null.
  //     allowNull: false,

  //     // For uniquely identify user.
  //     primaryKey: true
  //   },
  billId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  balance: { type: Sequelize.INTEGER, allowNull: false },

  billClientId: { type: Sequelize.INTEGER, allowNull: false },

  billStaffId: { type: Sequelize.INTEGER, allowNull: false }

}, {
  sequelize,
  tableName: 'bill',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'billId' }
      ]
    }
  ]
}
)

export default Bill
