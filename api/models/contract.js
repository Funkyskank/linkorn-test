const { TYPES, STATUSES } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define('Contract', {
    number: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM(Object.keys(TYPES).map(key => TYPES[key])),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(Object.keys(STATUSES).map(key => STATUSES[key])),
    },
    dateFrom: {
      type: DataTypes.DATE,
    },
    dateTo: {
      type: DataTypes.DATE,
    },
  });

  Contract.associate = (models) => {
    Contract.belongsTo(models.Client, {
      foreignKey: 'clientId',
      onDelete: 'CASCADE'
    });
    Contract.hasMany(models.Service, {
      foreignKey: 'contractId',
      as: 'services'
    });
  };

  return Contract;
};
