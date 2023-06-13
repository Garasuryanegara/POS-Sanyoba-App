const express = require("express");
const { fileUploader } = require("../middlewares/multer");
const { empControllers } = require("../controllers");
const router = express.Router();
const userController = require("../controllers").userController;

router.get("/", userController.getUser);
router.get("/draft", userController.getUserDraft);
router.post(
  "/",
  fileUploader({ destinationFolder: "staffImg" }).single("staffImg"),
  userController.insertUser
);
// router.post("/", userController.register);

router.post("/login", userController.login);
router.get("/token", userController.getByToken, userController.getUserByToken);
router.delete("/:id", userController.deleteUser);
router.patch("/:id", userController.activeUser);

module.exports = router;
