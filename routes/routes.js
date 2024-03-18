const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller");

router.get("/all", userController.getAllUsers);

module.exports = router;
