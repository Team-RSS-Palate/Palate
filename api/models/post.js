'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model { }

  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT

    },
    description: {
      type: DataTypes.TEXT,

    },
    imageLink: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'post'
  });


  sequelize.sync()
    .then(() => Post.create({
      title: "Pancakes",
      category: "Breakfast",
      imageLink: "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg",
      description: "Healthy Meal For KIDS! YOU WANT TO BLAHAHAAHAHAHAHAAHHA"



    }))
    .then(jane => {
      console.log(jane.toJSON());
    });


  Post.associate = models => {
    models.Post.belongsTo(models.User);
    models.Post.hasMany(models.Comment);
  }

  return Post;
};

