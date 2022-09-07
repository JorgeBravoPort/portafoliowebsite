var express = require('express');
var router = express.Router();
var blogsModel = require('/Users/jorgeandresbravo/portafoliowebsite/backend/models/blogs/blogsModel.js');

router.get('/', async function (req, res, next) {

    var blogs = await blogsModel.getBlog();

    res.render('controller/blog', {
        layout: 'controller/layout',
        usuario: req.session.nombre,
        blogs
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('controller/agregar', {
        layout: 'controller/layout',
    })
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.title != "" && req.body.body != "" && req.body.writer != "") {
            await blogsModel.insertBlog(req.body);
            res.redirect('/controller/blog');
        } else {
            res.render('controller/agregar', {
                layout: 'controller/layout',
                error: true,
                message: 'Complete every field'
            });
        }
    } catch (error) {
        console.log(error)
        res.render('controller/agregar', {
            layout: 'controller/layout',
            error: true,
            message: 'Blog could not be inserted'
        })
    }
}),
    module.exports = router;