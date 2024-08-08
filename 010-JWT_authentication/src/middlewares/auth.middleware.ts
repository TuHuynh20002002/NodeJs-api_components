import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Access denied" });
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    // const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // return res.status(200).json({ status: "200", message: "Access granted", data: decoded })
    next();
  } catch (err: any) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = auth;
