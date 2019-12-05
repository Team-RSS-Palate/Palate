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
    imageLink: {
      type: DataTypes.TEXT
    },
    ingredientsList: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    stepsList: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    categoryList: {
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

