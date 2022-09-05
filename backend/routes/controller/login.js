const router = require('express');


router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        var data = await
            usuariosModel.getUserbyUsernameAndPassword(usuario, password);
        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/controller/blog');
        } else {
            res.render('/controller/login', {
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
