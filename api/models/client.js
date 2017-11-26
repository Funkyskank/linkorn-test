module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patronymic: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    city: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT,
    },
  });

  Client.associate = (models) => {
    Client.hasMany(models.Contract, {
      foreignKey: 'clientId',
      as: 'contracts'
    });
  };

  return Client;
};
