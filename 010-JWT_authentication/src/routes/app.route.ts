import { Express } from "express";

const authMiddleware = require("../middlewares/auth.middleware");
const authRoute = require("../routes/auth.route");
const baseRoute = require("../routes/base.route");
const userRoute = require("../routes/user.route");
const ErrorController = require("../controllers/error.controller");

function router(app: Express) {
  app.use("/api/auth", authRoute);
  app.use("/api/user", authMiddleware, userRoute);
  app.use("/api", baseRoute);
  app.use(ErrorController.get404);
}

export default router;
