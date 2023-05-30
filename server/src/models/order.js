module.exports = (sequelize, Sequelize) => {
	const order = sequelize.define("Orders", {
		total: Sequelize.STRING,
	});
	return order;
};
