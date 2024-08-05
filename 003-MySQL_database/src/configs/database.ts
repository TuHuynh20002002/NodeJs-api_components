const mysql = require("mysql2");

require("dotenv").config();

const dbPool = mysql.createPool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

export default dbPool.promise();
