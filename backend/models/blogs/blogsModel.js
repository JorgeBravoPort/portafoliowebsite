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


module.exports = { getBlog, insertBlog };