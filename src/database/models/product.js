'use strict';
module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		name: DataTypes.STRING,
		price: DataTypes.DECIMAL,
		discount: DataTypes.DECIMAL,
		categoryId: DataTypes.INTEGER,
		description: DataTypes.TEXT,
		image: DataTypes.STRING,
	}, {
		paranoid: true,
	});
	
	Product.associate = function(models) {
		// associations can be defined here
		Product.belongsTo(models.Category, {
			as: 'category',
			foreignKey: 'categoryId'
		});
	};
	
	return Product;
};