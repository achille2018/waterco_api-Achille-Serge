import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Sector = sequelize.define('sector', {
  // sectorId BIGINT NOT NULL AUTO_INCREMENT,
  // sectorName varchar(225),
  // officeLocation varchar(225),
  // supervisorFirstName varchar(225),
  // supervisorLastName varchar(225),
  // primary key (sectorId)

  sectorId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  sectorName: { type: Sequelize.STRING(225), allowNull: false },

  officeLocation: { type: Sequelize.STRING(225), allowNull: false },

  supervisorFirstName: { type: Sequelize.STRING(225), allowNull: false },

  supervisorLastName: { type: Sequelize.STRING(225), allowNull: false }

})

export default Sector
