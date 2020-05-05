const DB = require('../database/models');
const PRODUCTS = DB.Product;

const controller = {
	root: async (req, res) => {
		let products = await PRODUCTS.findAll();
		res.render('index', { products });
	},
	search: (req, res) => {
		let word = req.query.keywords;
		let productsByWord = products.filter(pdto => pdto.name.toLowerCase().includes(word) ? pdto : null);	
		res.render('results', { 
			products: productsByWord, 
			keyword:  word,
			thousandGenerator: toThousand,
		});
	},
};

module.exports = controller;
