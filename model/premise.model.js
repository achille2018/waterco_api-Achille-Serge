import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Premise = sequelize.define('premise', {
  // id bigint not null AUTO_INCREMENT,
  // premiseClientId bigint not null,
  // premiseZoneId bigint not null,
  // premiseSectorId bigint not null,
  // classfication varchar(225),
  // premiseStatus varchar(20) not null,
  // primary key (id)

  id: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  premiseClientId: { type: Sequelize.INTEGER, allowNull: false },

  premiseZoneId: { type: Sequelize.INTEGER, allowNull: false },

  premiseSectorId: { type: Sequelize.INTEGER, allowNull: false },

  classfication: { type: Sequelize.STRING(225), allowNull: false },

  premiseStatus: { type: Sequelize.STRING(20), allowNull: false }

}, {
  sequelize,
  tableName: 'premise',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'premiseId' }
      ]
    }
  ]
}
)

export default Premise
