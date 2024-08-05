import pool from "../configs/database";

class User {
  static fetchAll() {
    return pool.execute("SELECT * FROM users");
  }
  
  static findByUsername(username: String) {
    return pool.query("SELECT * FROM users WHERE users.username = ?", [username]);
  }

  static findByEmail(email: String) {
    return pool.query("SELECT * FROM users WHERE users.email = ?", [email]);
  }
}

module.exports = User;
