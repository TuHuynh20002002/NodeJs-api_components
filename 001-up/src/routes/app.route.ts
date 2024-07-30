import { Express } from "express";

const baseRoute = require("../routes/base.route");
const ErrorController = require("../controllers/error.controller");

function router(app: Express) {
  app.use("/api", baseRoute);
  app.use(ErrorController.get404);
}

export default router;
