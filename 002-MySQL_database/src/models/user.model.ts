import db from "../configs/database";

class User {
  static fetchAll() {
    return db.execute("SELECT * FROM users");
  }
  
  static findByUsername(username: String) {
    return db.query("SELECT * FROM users WHERE users.username = ?", [username]);
  }

  static findByEmail(email: String) {
    return db.query("SELECT * FROM users WHERE users.email = ?", [email]);
  }
}

module.exports = User;
