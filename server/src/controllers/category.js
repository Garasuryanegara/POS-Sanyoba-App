const db = require("../models");
const { Op } = require("sequelize");

const categoryControllers = {
  insertCate: async (req, res) => {
    try {
      const { category } = req.body;
      await db.Category.create({
        category,
      }).then((result) => res.send(result));
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },
  getCategory: async (req, res) => {
    try {
      await db.Category.findAll().then((result) =>
        res.status(200).send(result)
      );
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
};
module.exports = categoryControllers;
