const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// get all users
router.get("/", userController.getAllUsers);

// get single user by id parameter
router.get("/:id", userController.getUserById);

module.exports = router;