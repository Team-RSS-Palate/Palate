'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
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
