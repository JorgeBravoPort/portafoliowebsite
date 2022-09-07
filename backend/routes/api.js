var express = require('express');
var router = express.Router();
var blogsModel = require('/Users/jorgeandresbravo/portafoliowebsite/backend/models/blogs/blogsModel.js');
var cloudnary = require('cloudinary').v2;

router.get('/blog', async function (req, res, next) {
    let blog = await blogsModel.getBlog();

    blog = blog.map(blog => {
        if (blog.img_id) {
            const imagen = cloudnary.url(blog.img_id, {
                width: 960,
                height: 200,
                crop: 'fill',
            });
            return {
                ...blog,
                imagen
            }
        } else {
            return {
                ...blog,
                imagen: ''
            }
        }
    });
    res.json(blog);
});

module.exports = router;    