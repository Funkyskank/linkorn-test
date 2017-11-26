module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  });

  Service.associate = (models) => {
    Service.belongsTo(models.Contract, {
      foreignKey: 'contractId',
      onDelete: 'CASCADE'
    });
  };

  return Service;
};
