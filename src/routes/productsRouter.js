// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const controller = require('../controllers/productsController');

router.get('/', controller.root); /* GET - All products */
router.get('/detail/:id', controller.detail); /* GET - Product detail */

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', controller.create); /* GET - Form to create */
router.post('/', controller.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', controller.edit); /* GET - Form to create */
router.put('/:id', controller.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', controller.destroy); /* DELETE - Delete from DB */

module.exports = router;
