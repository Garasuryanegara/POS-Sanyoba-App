module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "Users",
    {
      name: Sequelize.STRING,
      phone: Sequelize.STRING,
      address: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.ENUM("admin", "user"),
      active: {
        type: Sequelize.BOOLEAN,
        defaultValues: true,
      },
      avatar_blob: {
        type: Sequelize.BLOB("long"),
      },
    },
    {
      paranoid: true,
    }
  );
  return user;
};
