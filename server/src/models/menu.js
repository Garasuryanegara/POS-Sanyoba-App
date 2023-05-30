module.exports = (sequelize, Sequelize) => {
	const menu = sequelize.define(
		"Menus",
		{
			name: Sequelize.STRING,
		},
		{ paranoid: true }
	);
	return menu;
};
