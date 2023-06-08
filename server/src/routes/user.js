const express = require("express");
const { fileUploader } = require("../middlewares/multer");
const { empControllers } = require("../controllers");
const router = express.Router();
const userController = require("../controllers").userController;

router.get("/", userController.getUser);
router.post(
  "/",
  fileUploader({ destinationFolder: "staffImg" }).single("staffImg"),
  userController.insertUser
);
// router.post("/", userController.register);

router.post("/login", userController.login);
router.get("/token", userController.getByToken, userController.getUserByToken);

// employee

router.get("/", empControllers.getMenu);
router.get("/Draft", empControllers.getMenuDraft);
router.get("/all", empControllers.getAll);
router.delete("/:id", empControllers.deleteMenu);
router.patch("/:id", empControllers.editMenu);
router.post(
  "/",
  fileUploader({ destinationFolder: "empImg" }).single("empImg"),
  empControllers.insertUser
);
router.patch(
  "/:id",
  fileUploader({
    destinationFolder: "empImg",
  }).single("empImg"),
  empControllers.editMenu
);

module.exports = router;
