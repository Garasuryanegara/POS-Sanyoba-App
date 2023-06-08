const db = require("../models");
const { Op } = require("sequelize");
const moment = require("moment");

const orderDetailsControllers = {
  insert: async (req, res) => {
    try {
      const { qty, menu_id, order_id } = req.body;
      await db.OrderDetail.create({
        qty,
        menu_id,
        order_id,
      }).then((result) => res.send(result));
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },
  getByDate: async (req, res) => {
    try {
      let percentSum;
      const { time1, time2 } = req.query;
      const details = await db.OrderDetail.findAll({
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
      const sum = await db.OrderDetail.sum("qty", {
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
        percentSum = ((sum - sum2) / sum2) * 100;
      }
      res.send({
        sum: sum,
        percentSum: percentSum,
        details: details,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getTable: async (req, res) => {
    try {
      const { time1, time2, limit, offset, column, sort, category_id, search } =
        req.query;
      let totalPages;
      let orderClause;
      const Clause = {
        createdAt: {
          [Op.between]: [
            moment(time1 ? time1 : moment("00:00:00", "hh:mm:ss")).format(),
            moment(time2 ? time2 : moment("00:00:00", "hh:mm:ss"))
              .add(1, "days")
              .format(),
          ],
        },
      };
      if (category_id) {
        Clause.category_id = category_id;
      }
      if (search) {
        Clause["$Menu.name$"] = {
          [Op.like]: `%${search}%`,
        };
      }
      if (column === "name") {
        orderClause = [[db.Menu, column, sort]];
      } else if (column) {
        orderClause = [[column, sort]];
      }
      if (limit) {
        const totalCount = await db.OrderDetail.count({
          include: [
            {
              model: db.Menu,
            },
          ],
          where: Clause,
        });
        totalPages = Math.ceil(totalCount / limit);
      }
      const details = await db.OrderDetail.findAll({
        include: [
          {
            model: db.Menu,
          },
        ],
        where: Clause,
        order: orderClause,
        limit: limit ? Number(limit) : null,
        offset: offset ? Number(offset) : null,
      });
      res.send({
        details: details,
        totalPages: totalPages,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getOrderList: async (req, res) => {
    try {
      const orderList = await db.OrderDetail.findAll({
        include: [
          {
            model: db.Menu,
          },
        ],
        where: { order_id: req.query.order_id },
      });
      res.send(orderList);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
};
module.exports = orderDetailsControllers;
