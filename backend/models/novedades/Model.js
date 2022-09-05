var pool = require('./bd');

async function getBlog() {
    var query = 'SELECT * FROM Blogs order by id desc';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getBlog };