import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Supply = sequelize.define('supply', {
  // id bigint not null AUTO_INCREMENT,
  // supplyPlantId bigint not null,
  // supplySectorId bigint not null,
  // primary key (id)

  id: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  supplyPlantId: { type: Sequelize.INTEGER, allowNull: false },

  supplySectorId: { type: Sequelize.INTEGER, allowNull: false }

})

export default Supply
