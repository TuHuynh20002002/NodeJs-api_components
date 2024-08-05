import pool from "../configs/database";

class User {
  static async #dbQuery(stmt: String = "") {
    try {
      const client = await pool.connect();
      const result = await client.query(stmt);
      client.release();
      return result.rows;
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message };
      }
    }
  }

  static fetchAll() {
    const stmt = "SELECT * FROM users";
    return this.#dbQuery(stmt);
  }

  static findByUsername(username: String) {
    const stmt = `SELECT * FROM users WHERE users.username = '${username}'`;
    return this.#dbQuery(stmt);
  }

  static findByEmail(email: String) {
    const stmt = `SELECT * FROM users WHERE users.email = '${email}'`;
    return this.#dbQuery(stmt);
  }
}

module.exports = User;
