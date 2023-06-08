const express = require("express");
const { fileUploader } = require("../middlewares/multer");
const router = express.Router();
const userController = require("../controllers").userController;
router.get("/", userController.getUser);
router.post(
  "/",
  fileUploader({ destinationFolder: "staffImg" }).single("staffImg"),
  userController.insertUser
);
// router.post("/", userController.register);

router.get("/login", userController.login);
router.get("/token", userController.getByToken, userController.getUserByToken);

module.exports = router;
