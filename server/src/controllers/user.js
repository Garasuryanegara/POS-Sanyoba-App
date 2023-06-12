const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const moment = require("moment");
const sharp = require("sharp");
const url = process.env.url;
const url_image = process.env.URL_IMAGE;

const userController = {
  register: async (req, res) => {
    try {
      const { name, phone, address, password, role } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);

      await db.User.create({
        name,
        phone,
        address,
        password: hashPassword,
        role,
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
  login: async (req, res) => {
    try {
      const { role, name, password } = req.body;
      console.log(req.body);
      const user = await db.User.findOne({
        where: {
          [Op.and]: [
            {
              name,
            },
            {
              role,
            },
          ],
        },
      });
      if (user) {
        const match = await bcrypt.compare(password, user.dataValues.password);
        console.log(match);
        console.log(user.dataValues);
        if (match) {
          const payload = {
            id: user.dataValues.id,
          };

          const generateToken = nanoid();

          const token = await db.Token.create({
            expired: moment().add(1, "days").format(),
            token: generateToken,
            payload: JSON.stringify(payload),
            valid: true,
          });
          return res.send({
            message: "login berhasil",
            value: user,
            token: token.dataValues.token,
          });
        } else {
          throw new Error("login gagal");
        }
      } else {
        return res.send({
          message: "login gagal",
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },
  getByToken: async (req, res, next) => {
    try {
      let token = req.headers.authorization;
      token = token.split(" ")[1];
      console.log(req.headers.authorization);
      console.log("asdsa");
      let p = await db.Token.findOne({
        where: {
          [Op.and]: [
            {
              token,
            },
            {
              expired: {
                [Op.gt]: moment("00:00:00", "hh:mm:ss").format(),
                [Op.lte]: moment().add(1, "d").format(),
              },
            },
          ],
        },
      });
      if (!p) {
        throw new Error("token has expired");
      }
      user = await db.User.findOne({
        where: {
          id: JSON.parse(p?.dataValues?.payload).id,
        },
      });
      delete user.dataValues.password;
      req.user = user;
      next();
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  },
  getUserByToken: async (req, res) => {
    res.send(req.user);
  },
  uploadAvatar: async (req, res) => {
    try {
      const buffer = await sharp(req.file.buffer)
        .resize(250, 250)
        .png()
        .toBuffer();
      await db.User.create({
        name,
        phone,
        address,
        password: hashPassword,
        role,
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

  /// Admin handle Staff
  insertUser: async (req, res) => {
    try {
      const { name, phone, address, password, role } = req.body;
      const { filename } = req.file;
      console.log(req.body);
      // console.log(req.file);
      const hashPassword = await bcrypt.hash(password, 10);
      await db.User.create({
        name,
        phone,
        address,
        password: hashPassword,
        role,
        img_url: process.env.url_img + filename,
      }).then((result) => res.send(result));
      // await db.User.findAll().then((result) => {
      // res.send(result);
      // });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  },

  getUser: async (req, res) => {
    try {
      const { limit, offset, column, sort, search, id } = req.query;
      const whereClause = {};
      let totalPages;
      let orderClause;

      if (id) {
        whereClause.id = id;
      }

      if (search) {
        whereClause.name = {
          [Op.like]: `%${search}%`,
        };
      }
      if (column) {
        orderClause = [[column, sort]];
      }
      if (limit) {
        const totalCount = await db.User.count({
          where: whereClause,
        });
        totalPages = Math.ceil(totalCount / limit);
      }

      const users = await db.User.findAll({
        where: whereClause,
        order: orderClause,
        limit: limit ? Number(limit) : null,
        offset: offset ? Number(offset) : null,
      });
      res.send({
        Users: users,
        totalPages: totalPages,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    }
  },
  uploadAvatar: async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize(250, 250)
      .png()
      .toBuffer();

    var fulUrl =
      req.protocol +
      "://" +
      req.get("host") +
      "/Users/image/render/" +
      req.params.id;
  },
};
module.exports = userController;
