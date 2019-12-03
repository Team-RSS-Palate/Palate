'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model { }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 25]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
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

  sequelize.sync()

  User.associate = models => {
    // associations can be defined here

    models.User.hasMany(models.Post);
  };

  return User;
};
