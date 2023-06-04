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
              moment(time1 ? time1 : moment()).format(),
              moment(time2 ? time2 : moment())
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
              moment(time1 ? time1 : moment()).format(),
              moment(time2 ? time2 : moment())
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
  // getTable: async (req, res) => {
  //   try {
  //     const {
  //       time1,
  //       time2,
  //       limit,
  //       offset,
  //       column,
  //       direction,
  //       category_id,
  //       search,
  //     } = req.query;
  //     let totalPages;
  //     const Clause = {
  //       createdAt: {
  //         [Op.between]: [
  //           moment(time1 ? time1 : moment()).format(),
  //           moment(time2 ? time2 : moment())
  //             .add(1, "days")
  //             .format(),
  //         ],
  //       },
  //     };
  //     if (category_id) {
  //       Clause.category_id = category_id;
  //     }
  //     if (search) {
  //       Clause["$Menu.name$"] = {
  //         [Op.like]: `%${search}%`,
  //       };
  //     }
  //     if (limit) {
  //       const totalCount = await db.OrderDetail.count({ where: Clause });
  //       totalPages = Math.ceil(totalCount / limit);
  //     }
  //     const details = await db.OrderDetail.findAll({
  //       include: [
  //         {
  //           model: db.Menu,
  //         },
  //       ],
  //       where: Clause,
  //       order: [[column, direction]],
  //       limit: limit ? Number(limit) : null,
  //       offset: offset ? Number(offset) : null,
  //     });
  //     res.send({
  //       details: details,
  //       totalPages: totalPages,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).send({
  //       message: err.message,
  //     });
  //   }
  // },
};
module.exports = orderDetailsControllers;