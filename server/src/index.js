const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = require("./routes");
const db = require("./models");
// db.sequelize.sync({ alter: true });

app.use("/users", router.userRouter);
app.use("/orders", router.orderRouter);
app.use("/orderDetails", router.orderDetailRouter);
app.use("/menus", router.menuRouter);
app.use("/categories", router.categoryRouter);

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
