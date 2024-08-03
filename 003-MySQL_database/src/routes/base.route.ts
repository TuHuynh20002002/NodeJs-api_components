import express from "express";

const router = express.Router();
const BaseController = require("../controllers/base.controller");

router.get("/up", BaseController.up);
router.get("/", BaseController.home);

module.exports = router;
