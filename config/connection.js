
require('dotenv').config();

const Sequelize = require('sequelize');


// ?: trigraph operator 
// if process.env.JAWSDB_URL is true then use us JawsDB, if not use mySQL
const sequelize = process.env.JAWSDB_GOLD_URL
  ? new Sequelize(process.env.JAWSDB_GOLD_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
