'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model { }

  Post.init({
    title: {
      type: DataTypes.STRING,

    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    categories: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    }

  }, {
    sequelize,
    modelName: 'post'
  });

  //   -> nullable number of servings & cook time
  // array -> cooking directions
  // array -> ingredients
  // array -> tags



  Post.associate = models => {
    models.Post.belongsTo(models.User);
    models.Post.hasMany(models.Comment);
  }

  return Post;
};

