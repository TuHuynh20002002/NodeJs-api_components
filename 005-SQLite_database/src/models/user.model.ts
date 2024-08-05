import db from "../configs/database";

class User {
  static createTableIfNotExist(): void {
    const stmt = db.prepare(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        username TEXT, 
        email TEXT
      )`
    );
    stmt.run();
  }

  static fetchAll() {
    const stmt = db.prepare("SELECT * FROM users");
    return stmt.all();
  }

  static findByUsername(username: String) {
    const stmt = db.prepare("SELECT * FROM users WHERE users.username = ?");
    return stmt.all(username);
  }

  static findByEmail(email: String) {
    const stmt = db.prepare("SELECT * FROM users WHERE users.email = ?");
    return stmt.all(email);
  }
}

module.exports = User;
