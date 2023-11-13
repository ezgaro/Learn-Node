const express = require('express');
const storeController = require("../controllers/storeController");
const router = express.Router();

// Do work here
router.get('/',storeController.homePage)
router.get('/add',storeController.addStore)
router.post('/add',storeController.createStore)
module.exports = router;