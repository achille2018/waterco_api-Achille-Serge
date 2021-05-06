import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Staff = sequelize.define('staff', {
  // staffId bigint not null AUTO_INCREMENT,
  // staffRank varchar(225),
  // staffFirstName varchar(225) NOT NULL,
  // staffLastName varchar(225) not null,
  // primary key (staffId)

  staffId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  staffRank: { type: Sequelize.STRING(225), allowNull: false },

  staffFirstName: { type: Sequelize.STRING(225), allowNull: false },

  staffLastName: { type: Sequelize.STRING(225), allowNull: false }

})

export default Staff
