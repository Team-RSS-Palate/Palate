'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'post'
  });
  sequelize.sync()
  .then(() => Post.create({
    content: 'jim',
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


  return Post;
};