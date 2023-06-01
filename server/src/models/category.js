module.exports = (sequelize, Sequelize) => {
  const category = sequelize.define(
    "Categories",
    {
      category: Sequelize.STRING,
    },
    {
      paranoid: true,
    }
  );
  return category;
};
