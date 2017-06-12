var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiControllers');

router.get('/', apiController.getUsers);
router.post('/newUser', apiController.newUser);

module.exports = router;