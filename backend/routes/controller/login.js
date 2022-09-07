var express = require('express');
var router = express.Router();
var usuariosModel = require('/Users/jorgeandresbravo/portafoliowebsite/backend/models/usuariosModel.js')

router.get('/', function (req, res, next) {
    res.render('controller/login', {
        layout: 'controller/layout'
    });
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('controller/login', {
        layout: 'controller/layout'
    })
}
)

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        var data = await
            usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/controller/blog');
        } else {
            res.render('./controller/login', {
                layout: 'controller/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('controller/login', {
        layout: 'controller/layout',
    })
});

module.exports = router;
