// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const controller = require('../controllers/mainController');

router.get('/', controller.root); /* GET - home page */
router.get('/search', controller.search); /* GET - search results */

module.exports = router;
