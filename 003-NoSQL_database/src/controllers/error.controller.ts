import { Request, Response, NextFunction } from "express";

class ErrorController {
  // [GET] /{unknown_pages}
  get404(req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ message: "URL Not found" });
  }
}

module.exports = new ErrorController();
