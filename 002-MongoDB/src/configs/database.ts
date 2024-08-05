import { connect } from "mongoose";

require("dotenv").config();

async function dbConnect() {
  try {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const host = process.env.DB_HOST;
    const port = process.env.DB_PORT;
    const database = process.env.DB_DATABASE;

    const db_endpoint = `mongodb://${host}:${port}/${database}`;

    await connect(db_endpoint, {
      user: username,
      pass: password,
      authSource: "admin",
    });
    console.log("Connect to MongoDB successfully!!!");
  } catch (error) {
    if (error instanceof Error) {
      console.log({ error: error.message });
    }
  }
}

module.exports = { dbConnect };
