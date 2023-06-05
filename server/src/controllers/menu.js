const db = require("../models");
const { Op } = require("sequelize");
const { Category } = require("../models");

const menuControllers = {
  insert: async (req, res) => {
    try {
      const { name, category_id } = req.body;
      await db.Menu.create({
        name,
        category_id,
      }).then((result) => res.send(result));
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },
  getMenu: async (req, res) => {
    try {
      const { category_id, search } = req.query;
      const Clause = {};
      if (category_id) {
        Clause.category_id = category_id;
      }
      if (search) {
        Clause.name = {
          [Op.like]: `%${search}%`,
        };
      }
      const menus = await db.Menu.findAll({
        where: Clause,
      });
      res.send({
        menus: menus,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
  getMenuDraft: async (req, res) => {
    try {
      const { limit, offset, column, direction, category, search } = req.query;
      const whereClause = {};
      let totalPages;
      let orderClause;
      if (category) {
        whereClause["$Category.category$"] = category;
      }
      if (search) {
        whereClause.name = {
          [Op.like]: `%${search}%`,
        };
      }
      if (column === "category") {
        orderClause = [[db.Category, column, direction]];
      } else if (column) {
        orderClause = [[column, direction]];
      }
      if (limit) {
        const totalCount = await db.Menu.count({
          include: [
            {
              model: db.Category,
            },
          ],
          where: whereClause,
        });
        totalPages = Math.ceil(totalCount / limit);
      }

      const menus = await db.Menu.findAll({
        include: [
          {
            model: db.Category,
          },
        ],
        where: whereClause,
        order: orderClause,
        limit: limit ? Number(limit) : null,
        offset: offset ? Number(offset) : null,
      });
      res.send({
        menus: menus,
        totalPages: totalPages,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
};
module.exports = menuControllers;
