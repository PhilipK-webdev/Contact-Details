const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller.service");

router.get("/all", userController.getAllUsers);
router.post("/create", userController.createUser);
router.put("/edit", userController.editUser);
router.delete("/remove/:id", userController.removeUser);

module.exports = router;
