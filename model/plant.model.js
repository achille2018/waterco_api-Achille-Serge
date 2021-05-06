import Sequelize from 'sequelize'
import { sequelize } from './db/dbConnect.js'

const Plant = sequelize.define('plant', {

  //   BillId: {
  //     type: Sequelize.INTEGER,

  //     // To increment user_id automatically.
  //     autoIncrement: true,

  //     // user_id can not be null.
  //     allowNull: false,

  //     // For uniquely identify user.
  //     primaryKey: true
  //   },
  plantId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  plantName: { type: Sequelize.STRING(225), allowNull: false },

  plantSize: { type: Sequelize.INTEGER, allowNull: false }

})

export default Plant
