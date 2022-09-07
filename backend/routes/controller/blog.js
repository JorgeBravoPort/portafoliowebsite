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

    router.get('/eliminar/:id', async (req, res, next) => {
        var id = req.params.id;
        await blogsModel.deleteBlogById(id);
        res.redirect('/controller/blog');
    })


router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    //console.log(req.params.id);
    var blog = await blogsModel.getBlogById(id);

    //console.log(req.params.id);
    res.render('controller/modificar', {
        layout: 'controller/layout',
        blog
    })
})

router.post('/modificar', async (req, res, next) => {
    try {
        var obj = {
            title: req.body.title,
            body: req.body.body,
            writer: req.body.writer
        }
        //console.log(obj);
        await blogsModel.modificarBlogById(obj, req.body.id);
        res.redirect('/controller/blog');
    } catch (error) {
        console.log(error);
        res.render('controller/modificar', {
            layout: 'controller/layout',
            error: true,
            message: 'no se modifico el Blog'
        }
        )
    }
})
module.exports = router;