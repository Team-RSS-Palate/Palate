'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init(
    {
      post_id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      description: {
        type: sequelize.TEXT,
        notEmpty: false
      }

      // Timestamps
      createdAt: Sequelize.DATE,
    }, {
      sequelize,
      modelName: 'post'
    }
  );

  Post.associate = models => {
    // associations can be defined here

    Post.BelongsTo(User)
  };

  return Post;
};
