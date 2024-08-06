import express from "express";

const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get("/all", UserController.getAllUsers);
router.get("/email/:email", UserController.getUserByEmail);
router.get("/username/:username", UserController.getUserByUsername);

module.exports = router;
