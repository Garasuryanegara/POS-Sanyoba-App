const express = require("express");
const router = express.Router();
const userController = require("../controllers").userController;
router.post("/", userController.register);
router.post("/", userController.insertUser);
router.get("/", userController.searchUser);
router.get("/", userController.getUser);
router.get("/login", userController.login);
router.get("/token", userController.getByToken, userController.getUserByToken);

module.exports = router;
