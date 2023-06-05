const express = require("express");
const router = express.Router();
const orderDetailsControllers =
  require("../controllers").orderDetailsControllers;

router.post("/", orderDetailsControllers.insert);
router.get("/", orderDetailsControllers.getByDate);
// router.get("/table", orderDetailsControllers.getTable);
module.exports = router;
