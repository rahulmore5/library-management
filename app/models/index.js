'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//Define models
db.books = require("./books.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.book_transactions = require("./book_transaction.model.js")(sequelize, Sequelize);
//Define relations of tables
db.users.hasMany(db.book_transactions,{foreignKey:"userId",primaryKey: true});
db.books.hasMany(db.book_transactions,{foreignKey:"bookId"});
db.book_transactions.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});
db.book_transactions.belongsTo(db.books, {
  foreignKey: "bookId",
  as: "book",
});
module.exports = db;
