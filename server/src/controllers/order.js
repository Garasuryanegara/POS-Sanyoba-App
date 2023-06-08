const db = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

const orderControllers = {
  insert: async (req, res) => {
    try {
      const { total } = req.body;
      await db.Order.create({
        total,
      }).then((result) => res.send(result));
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },
  getByDate: async (req, res) => {
    try {
      let percentCount;
      let percentSum;
      const { time1, time2 } = req.query;
      const { count, rows } = await db.Order.findAndCountAll({
        where: {
          createdAt: {
            [Op.between]: [
              moment(time1 ? time1 : moment("00:00:00", "hh:mm:ss")).format(),
              moment(time2 ? time2 : moment("00:00:00", "hh:mm:ss"))
                .add(1, "days")
                .format(),
            ],
          },
        },
      });
      const sum = await db.Order.sum("total", {
        where: {
          createdAt: {
            [Op.between]: [
              moment(time1 ? time1 : moment("00:00:00", "hh:mm:ss")).format(),
              moment(time2 ? time2 : moment("00:00:00", "hh:mm:ss"))
                .add(1, "days")
                .format(),
            ],
          },
        },
      });
      if (!time1 && !time2) {
        const count2 = await db.Order.count({
          where: {
            createdAt: {
              [Op.between]: [
                moment("00:00:00", "hh:mm:ss").add(-1, "d").format(),
                moment("00:00:00", "hh:mm:ss").format(),
              ],
            },
          },
        });
        const sum2 = await db.Order.sum("total", {
          where: {
            createdAt: {
              [Op.between]: [
                moment("00:00:00", "hh:mm:ss").add(-1, "d").format(),
                moment("00:00:00", "hh:mm:ss").format(),
              ],
            },
          },
        });
        percentCount = ((count - count2) / count2) * 100;
        percentSum = ((sum - sum2) / sum2) * 100;
      }
      res.send({
        count: count,
        percentCount: percentCount,
        percentSum: percentSum,
        sum: sum,
        rows: rows,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
};

module.exports = orderControllers;
