const express = require("express");
const router = express.Router();
const orderController = require("../controllers").orderControllers;

router.post("/", orderController.insert);
router.get("/", orderController.getByDate);

module.exports = router;
