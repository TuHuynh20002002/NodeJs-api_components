import { Request, Response, NextFunction } from "express";

class BaseController {
  // [GET] /
  home(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: "Welcome to Tu-Huynh's homeground" });
  }

  // [GET] /up
  up(req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: "Server is running" });
  }
}

module.exports = new BaseController();
