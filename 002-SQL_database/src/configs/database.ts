const mysqlDriver = require("mysql2");

require("dotenv").config();

const dbPool = mysqlDriver.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

export default dbPool.promise();
