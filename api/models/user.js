'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      user_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      username: {
        type: sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [5, 25]
        }
      },
      email: {
        type: sequelize.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'user'
    }
  );

  User.associate = models => {
    // associations can be defined here
    // User.hasMany(Posts);
  };

  return User;
};
