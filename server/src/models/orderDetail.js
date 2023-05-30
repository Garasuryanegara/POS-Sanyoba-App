module.exports = (sequelize, Sequelize) => {
	const orderDetail = sequelize.define("orderDetails", {
		qty: Sequelize.STRING,
	});
	return orderDetail;
};
