const Database = require("better-sqlite3");

require("dotenv").config();

const db = new Database(process.env.DB_PATH || ":memory:");

export default db;
