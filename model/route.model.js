import Sequelize from 'sequelize'
import { sequelize } from '../db/dbConnect.js'

const Route = sequelize.define('route', {
  // id bigint not null AUTO_INCREMENT,
  // routeName varchar(225) not null,
  // routeZoneId bigint not null,
  // routeStatus varchar(20) not null,
  // primary key (id)

  id: { autoIncrement: true, type: Sequelize.INTEGER, allowNull: false, primaryKey: true },

  routeName: { type: Sequelize.STRING(225), allowNull: false },

  routeZoneId: { type: Sequelize.INTEGER, allowNull: false },

  routeStatus: { type: Sequelize.STRING(225), allowNull: false }

}, {
  sequelize,
  tableName: 'route',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: [
        { name: 'id' }
      ]
    }
  ]
})

export default Route
