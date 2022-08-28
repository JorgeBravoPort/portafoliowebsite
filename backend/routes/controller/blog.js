var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('controller/blog', {
        layout: 'controller/layout',
        usuario: req.user.username
    });
});

module.exports = router;