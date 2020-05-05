const DB = require('../database/models');
const PRODUCTS = DB.Product;
const CATEGORIES = DB.Category;

const controller = {
	// Root - Show all products
	root: async (req, res) => {
		let products = await PRODUCTS.findAll();
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: async (req, res) => {
		let pdtoID = req.params.id;
		let productFind = await PRODUCTS.findByPk(pdtoID);
	
		res.render('detail', { productFind });
	},

	// Create - Form to create
	create: async (req, res) => {
		let categories = await CATEGORIES.findAll();
		res.render('product-create-form.ejs', { categories });
	},
	
	// Create -  Method to store
	store: async (req, res) => {
		// return res.send(req.body);
		let product = await PRODUCTS.create(req.body)
		res.redirect(`/products/detail/${product.id}`);
	},

	// Edit - Form to edit
	edit: async (req, res) => {
		let pdtoID = req.params.id;
		let productToEdit = await PRODUCTS.findByPk(pdtoID);
		let categories = await CATEGORIES.findAll();

		res.render('product-edit-form', { productToEdit, categories });
	},

	// Update - Method to update
	update: async (req, res) => {
		let pdtoID = req.params.id;
		await PRODUCTS.update(req.body, {
			where: { id: pdtoID }
		});

		return res.redirect('/');
	},

	// Delete - Delete one product from DB
	destroy : async (req, res) => {
		await PRODUCTS.destroy({
			where: { id: req.params.id }
		});
		res.redirect('/');
	}
};

module.exports = controller;