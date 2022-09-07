var pool = require('/Users/jorgeandresbravo/portafoliowebsite/backend/db.js');

async function getBlog() {
    var query = 'SELECT * FROM logs ';
    var rows = await pool.query(query);
    return rows;
}

async function insertBlog(obj) {
    try {
        var query = 'INSERT INTO logs set ?';
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteBlogById(id) {
    var query = 'DELETE FROM logs WHERE id = ?';
    var rows = await pool.query(query, [id])
    return rows;
}

async function getBlogById(id) {
    var query = 'SELECT * FROM logs WHERE id = ?';
    var rows = await pool.query(query, [id])
    return rows[0];
}

async function modificarBlogById(obj, id) {
    try {
        var query = 'UPDATE logs SET ? WHERE id = ?';
        var rows = await pool.query(query, [obj, id])
        return rows;
    } catch (error) {
        throw error
    }
}

module.exports = { getBlog, insertBlog, deleteBlogById, getBlogById, modificarBlogById };