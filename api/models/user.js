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
      },
      {
        post_id: {
          type: Sequelize.INTEGER,

          references: {
            model: postMessage,
            key: post_id,
            // This declares when to check the fk constraints
            // deferrable: sequelize.deferrable.INITALLY_DEFERRED
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'user'
    }
  );

  User.associate = models => {
    // associations can be defined here

    User.HasMany(Posts);
  };

  return User;
};
