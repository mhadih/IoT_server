var express = require('express');
var router = express.Router();
var user = require('./User');

/* GET home page. */

router.get('/', function (res, req, next) {
    
});

router.use('/user', user);  

module.exports = router;
