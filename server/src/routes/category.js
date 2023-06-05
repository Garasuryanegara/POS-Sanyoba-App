const express = require("express");
const router = express.Router();
const categoryControllers = require("../controllers").categoryControllers;

router.get("/", categoryControllers.getCategory);
router.post("/", categoryControllers.insertCate);

module.exports = router;
