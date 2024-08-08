import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

require("dotenv").config();

const secretKey = process.env.JWT_SECRET_KEY || "week_secret_key";
const User = require("../models/user.model");

class AuthController {
  // [GET] /api/auth/login
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmail(email);
      console.log(user);

      if (user === null) {
        res.status(401).json({ error: "User not found" });
        return;
      }

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }

      const accessToken = jwt.sign({ _id: user.id }, secretKey, {expiresIn: "1h"});
      res.status(200).json({
        status: "200",
        message: "Login Successfully",
        data: {
          _id: user.id,
          user: user.name,
          email: user.email,
          accessToken: accessToken,
        },
      });
    } catch (err: any) {
      res.status(500).json({ status: "error", message: err.message });
    }
  }
}

module.exports = new AuthController();
