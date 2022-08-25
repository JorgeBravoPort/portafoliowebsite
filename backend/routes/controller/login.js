var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('controller/login', {
        layout: 'controller/layout',
    });
});

module.exports = router;
