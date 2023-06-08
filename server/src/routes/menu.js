const express = require("express");
const router = express.Router();
const menuControllers = require("../controllers").menuControllers;
const { fileUploader, upload } = require("../middlewares/multer");

router.get("/", menuControllers.getMenu);
router.get("/Draft", menuControllers.getMenuDraft);
router.get("/all", menuControllers.getAll);
router.delete("/:id", menuControllers.deleteMenu);
router.post(
	"/",
	fileUploader({ destinationFolder: "productImg" }).single("productImg"),
	menuControllers.insert
);
router.patch(
	"/:id",
	fileUploader({
		destinationFolder: "productImg",
	}).single("productImg"),
	menuControllers.editMenu
);

module.exports = router;
