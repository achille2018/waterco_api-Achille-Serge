import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Zone = sequelize.define('zone', {
  // zoneId BIGINT NOT NULL AUTO_INCREMENT,
  // zoneName varchar(225) NOT NULL,
  // numberClient int(11) DEFAULT 0,
  // sectorId bigint not null,
  // PRIMARY KEY (zoneId)

  zoneId: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  zoneName: { type: Sequelize.STRING(225), allowNull: false },

  numberClient: { type: Sequelize.INTEGER(11), allowNull: false },

  sectorId: { type: Sequelize.INTEGER, allowNull: false }

})

export default Zone
