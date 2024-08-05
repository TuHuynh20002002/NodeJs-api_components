import pool from "../configs/database";

class User {
  static async #dbQuery(queryText: String = "") {
    try {
      const client = await pool.connect();
      const result = await client.query(queryText);
      client.release();
      return result.rows;
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message };
      }
    }
  }

  static fetchAll() {
    const queryText = "SELECT * FROM users";
    return this.#dbQuery(queryText);
  }

  static findByUsername(username: String) {
    const queryText = `SELECT * FROM users WHERE users.username = '${username}'`;
    return this.#dbQuery(queryText);
  }

  static findByEmail(email: String) {
    const queryText = `SELECT * FROM users WHERE users.email = '${email}'`;
    return this.#dbQuery(queryText);
  }
}

module.exports = User;
