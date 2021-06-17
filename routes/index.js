var express = require('express');
var router = express.Router();
var userController = require('../controller/usercontroller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/user', userController.createUser);
router.get('./user', userController.getUser)
module.exports = router;
