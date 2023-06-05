const express = require("express");
const router = express.Router();
const menuControllers = require("../controllers").menuControllers;

router.post("/", menuControllers.insert);
router.get("/", menuControllers.getMenu);
router.get("/Draft", menuControllers.getMenuDraft);
router.get("/all", menuControllers.getAll);

module.exports = router;
