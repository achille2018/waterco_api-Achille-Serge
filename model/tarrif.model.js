import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Tarrif = sequelize.define('tarrif', {
  // id bigint not null AUTO_INCREMENT,
  // tarrifClientId bigint not null,
  // meterMesured bigint not null,
  // primary key (id)

  id: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  tarrifClientId: { type: Sequelize.INTEGER, allowNull: false },

  meterMesured: { type: Sequelize.INTEGER, allowNull: false }

})

export default Tarrif
