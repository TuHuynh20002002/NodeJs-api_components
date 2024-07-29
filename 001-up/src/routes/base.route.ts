import express, { Request, Response } from "express";

const BaseController = require("../controllers/base.controller");
const router = express.Router();

router.get("/up", BaseController.up);
router.get("/", BaseController.home);

module.exports = router;
