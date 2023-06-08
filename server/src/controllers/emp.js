const db = require("../models");
const { Op } = require("sequelize");
const { Category } = require("../models");

const menuControllers = {
  getAll: async (req, res) => {
    try {
      await db.User.findAll().then((result) => res.send(result));
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },

  insertUser: async (req, res) => {
    try {
      const { name, phone, address, password, role } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const { filename } = req.file;
      await db.User.create({
        name,
        phone,
        address,
        password: hashPassword,
        role,
        img_url: process.env.url_img + filename,
      });
      return await db.User.findAll().then((result) => {
        res.send(result);
      });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },

  getMenu: async (req, res) => {
    try {
      const { role, search } = req.query;
      const Clause = {};
      if (role) {
        Clause.role = role;
      }
      if (search) {
        Clause.name = {
          [Op.like]: `%${search}%`,
        };
      }
      const emps = await db.User.findAll({
        where: Clause,
      });
      res.send({
        emps: emps,
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
      const { limit, offset, column, sort, role, search } = req.query;
      const whereClause = {};
      let totalPages;
      let orderClause;
      if (role) {
        whereClause["$role.role$"] = role;
      }
      if (search) {
        whereClause.name = {
          [Op.like]: `%${search}%`,
        };
      }
      if (column === "role") {
        orderClause = [[db.role, column, sort]];
      } else if (column) {
        orderClause = [[column, sort]];
      }
      if (limit) {
        const totalCount = await db.User.count({
          include: [
            {
              model: db.role,
            },
          ],
          where: whereClause,
        });
        totalPages = Math.ceil(totalCount / limit);
      }

      const emps = await db.User.findAll({
        include: [
          {
            model: db.role,
          },
        ],
        where: whereClause,
        order: orderClause,
        limit: limit ? Number(limit) : null,
        offset: offset ? Number(offset) : null,
      });
      res.send({
        emps: emps,
        totalPages: totalPages,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },

  deleteMenu: async (req, res) => {
    try {
      await db.User.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send({
        message: "Employee berhasil dihapus",
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  },

  editMenu: async (req, res) => {
    try {
      const { name, phone, address, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const { filename } = req.file;
      await db.User.update(
        {
          name,
          phone,
          address,
          password: hashPassword,
          img_url: process.env.url_img + filename,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then((result) => res.send(result));
    } catch (err) {
      console.log(err.message);
      return res.status(500).send({ message: err.message });
    }
  },
};
module.exports = menuControllers;
