import { Request, Response, NextFunction } from "express";

const User = require("../models/user.model");

class UserController {
  // [GET] /api/user/list
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.fetchAll();
      if (users.length === 0) {
        res.status(404).json({ message: "No user found" });
        return;
      }
      res.status(200).json({ result: users });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }

  // [GET] /api/user/username/{username}
  async getUserByUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findByUsername(req.params.username);
      if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json({ result: user });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }

  // [GET] /api/user/email/{email}
  async getUserByEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findByEmail(req.params.email);
      if (user === null) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json({ result: user });
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }
  }
}

module.exports = new UserController();
