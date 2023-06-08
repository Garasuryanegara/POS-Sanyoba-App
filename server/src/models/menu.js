module.exports = (sequelize, Sequelize) => {
	const menu = sequelize.define(
		"Menus",
		{
			name: Sequelize.STRING,
			price: Sequelize.INTEGER,
			img_url: {
				type: Sequelize.STRING,
				defaultValues: null,
			},
		},
		{ paranoid: true }
	);
	return menu;
};
