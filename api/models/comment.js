
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model { }

  Comment.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 500],
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'comment'
  });

  sequelize.sync()

  Comment.associate = models => {
    // associations can be defined here

    models.Comment.belongsTo(models.Post);
  };

  return Comment;
};