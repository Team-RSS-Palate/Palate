'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const dotenv = require('dotenv');
dotenv.config();

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  //sequelize = new Sequelize('postgres://ejxcjdbpeavhis:ce614bd843ab04df1256dbbf933ef28ede40050d92db76f2923de6006b05cd3f@ec2-50-19-114-27.compute-1.amazonaws.com:5432/d8q5v2gd1g2ip8');
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
console.log("Ok")

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    // const model = sequelize['import'](path.join(__dirname, file));
    const model = sequelize.import(path.join(__dirname, file));
    const modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
    db[modelName] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
