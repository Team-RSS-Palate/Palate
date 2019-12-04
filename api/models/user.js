'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 25],
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 25],
        notEmpty: true
      }
    },
    avatar: {
      // STRING because it will be a url link to an image in Firebase
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25],
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25],
        notEmpty: true
      }
    },
    // {
    //   post_id: {
    //     type: Sequelize.INTEGER,

    //     references: {
    //       model: postMessage,
    //       key: post_id,
    //       // This declares when to check the fk constraints
    //       // deferrable: sequelize.deferrable.INITALLY_DEFERRED
    //     }
    //   }
    // }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = models => {
    // associations can be defined here
    models.User.hasMany(models.Post);
  };

  return User;
};
