'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      comment_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        validate: {
          len: [1, 500],
          notEmpty: true
        }
      },

      // Timestamps
      createdAt: Sequelize.DATE
    },
    {
      sequelize,
      modelName: 'comment'
    }
  );

  Comment.associate = models => {
    // associations can be defined here

    Comment.BelongsTo(Post);
  };

  return Comment;
};
