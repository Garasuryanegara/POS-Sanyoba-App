module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "Users",
    {
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      address: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.ENUM("admin", "cashier"),
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      img_url: {
        type: Sequelize.STRING,
      },
    },
    {
      paranoid: true,
    }
  );
  return user;
};
